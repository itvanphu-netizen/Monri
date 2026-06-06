extends CanvasLayer

@onready var money_label: Label = $TopBar/MoneyLabel
@onready var day_label: Label = $TopBar/DayLabel
@onready var inventory_grid: GridContainer = $BottomBar/InventoryGrid
@onready var tool_plant_btn: Button = $BottomBar/ToolPlant
@onready var tool_harvest_btn: Button = $BottomBar/ToolHarvest
@onready var sell_btn: Button = $BottomBar/SellBtn
@onready var next_day_btn: Button = $BottomBar/NextDayBtn
@onready var shop_panel: Panel = $ShopPanel
@onready var shop_grid: GridContainer = $ShopPanel/ShopGrid
@onready var plot_panel: Panel = $PlotPanel
@onready var plot_grid: GridContainer = $PlotPanel/PlotGrid
@onready var house_panel: Panel = $HousePanel
@onready var house_upgrade_btn: Button = $HousePanel/UpgradeBtn
@onready var machine_panel: Panel = $MachinePanel
@onready var machine_upgrade_btn: Button = $MachinePanel/UpgradeBtn
@onready var inventory_label: Label = $BottomBar/InventoryLabel

var game_manager: GameManager

func _ready():
	game_manager = get_node("/root/GameManager")
	setup_signals()
	build_shop()
	build_plot_market()
	refresh_ui()

func setup_signals():
	game_manager.money_changed.connect(_on_money_changed)
	game_manager.day_changed.connect(_on_day_changed)
	tool_plant_btn.pressed.connect(_on_plant_btn)
	tool_harvest_btn.pressed.connect(_on_harvest_btn)
	sell_btn.pressed.connect(_on_sell_btn)
	next_day_btn.pressed.connect(_on_next_day)

func build_shop():
	for c in shop_grid.get_children():
		shop_grid.remove_child(c)
		c.queue_free()
	for t in CropData.CropType.values():
		var info = CropData.get_crop_info(t)
		var btn = Button.new()
		btn.text = info["name"] + "\n" + str(info["buy_price"]) + "đ"
		btn.custom_minimum_size = Vector2(100, 80)
		btn.pressed.connect(_on_buy_crop.bind(t))
		shop_grid.add_child(btn)

func build_plot_market():
	for c in plot_grid.get_children():
		plot_grid.remove_child(c)
		c.queue_free()
	for i in range(1, game_manager.plot_prices.size()):
		if game_manager.owned_plots.has(i): continue
		var btn = Button.new()
		btn.text = "Ô " + str(i+1) + "\n" + str(game_manager.plot_prices[i]) + "đ"
		btn.custom_minimum_size = Vector2(120, 60)
		btn.pressed.connect(_on_buy_plot.bind(i))
		plot_grid.add_child(btn)

func refresh_ui():
	money_label.text = "💰 " + format_money(game_manager.money)
	day_label.text = "Ngày " + str(game_manager.day)
	update_inventory()
	update_house_ui()
	update_machine_ui()

func format_money(v: int) -> String:
	if v >= 1000000:
		return str(v / 1000000) + "," + str((v % 1000000) / 100000) + "tr"
	elif v >= 1000:
		return str(v / 1000) + "." + str((v % 1000) / 100) + "k"
	return str(v) + "đ"

func update_inventory():
	var text = ""
	for crop in game_manager.inventory.keys():
		text += crop + ": " + str(game_manager.inventory[crop]) + " "
	if text == "":
		text = "Kho trống"
	inventory_label.text = "📦 " + text

func update_house_ui():
	if game_manager.house_level == 0:
		house_upgrade_btn.text = "Nhà cấp 4 → Nhà ngói\n2000đ"
	elif game_manager.house_level == 1:
		house_upgrade_btn.text = "Nhà ngói → Biệt thự\n10000đ"
	else:
		house_upgrade_btn.disabled = true
		house_upgrade_btn.text = "Đã tối đa"

func update_machine_ui():
	if game_manager.machine_level == 0:
		machine_upgrade_btn.text = "Máy bơm\n3000đ"
	elif game_manager.machine_level == 1:
		machine_upgrade_btn.text = "Máy cày\n8000đ"
	elif game_manager.machine_level == 2:
		machine_upgrade_btn.text = "Máy gặt\n20000đ"
	else:
		machine_upgrade_btn.disabled = true
		machine_upgrade_btn.text = "Đã tối đa"

func _on_money_changed(v):
	money_label.text = "💰 " + format_money(v)

func _on_day_changed(d):
	day_label.text = "Ngày " + str(d)

func _on_buy_crop(crop_type: int):
	var info = CropData.get_crop_info(crop_type)
	if game_manager.spend(info["buy_price"]):
		var player = get_node("/root/Main/Player")
		player.set_crop(crop_type)
		player.set_tool("plant")

func _on_plant_btn():
	var player = get_node("/root/Main/Player")
	player.set_tool("plant")

func _on_harvest_btn():
	var player = get_node("/root/Main/Player")
	player.set_tool("harvest")

func _on_sell_btn():
	var earned = game_manager.sell_all()
	if earned > 0:
		refresh_ui()

func _on_next_day():
	game_manager.advance_day()
	refresh_ui()

func _on_buy_plot(index: int):
	if game_manager.buy_plot(index):
		build_plot_market()
		var main = get_node("/root/Main")
		main.add_plot(index)

func _on_house_upgrade():
	var cost = 2000 if game_manager.house_level == 0 else 10000
	if game_manager.spend(cost):
		game_manager.house_level += 1
		update_house_ui()

func _on_machine_upgrade():
	var costs = [3000, 8000, 20000]
	if game_manager.machine_level < costs.size():
		if game_manager.spend(costs[game_manager.machine_level]):
			game_manager.machine_level += 1
			update_machine_ui()

func _on_shop_btn():
	shop_panel.visible = not shop_panel.visible
	plot_panel.visible = false
	house_panel.visible = false
	machine_panel.visible = false

func _on_plot_btn():
	plot_panel.visible = not plot_panel.visible
	shop_panel.visible = false
	house_panel.visible = false
	machine_panel.visible = false

func _on_house_btn():
	house_panel.visible = not house_panel.visible
	shop_panel.visible = false
	plot_panel.visible = false
	machine_panel.visible = false

func _on_machine_btn():
	machine_panel.visible = not machine_panel.visible
	shop_panel.visible = false
	plot_panel.visible = false
	house_panel.visible = false

func _on_close_shop():
	shop_panel.visible = false

func _on_close_plot():
	plot_panel.visible = false

func _on_close_house():
	house_panel.visible = false

func _on_close_machine():
	machine_panel.visible = false

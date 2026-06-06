extends Node

signal money_changed(amount: int)
signal day_changed(day: int)
signal crop_harvested(crop_name: String, count: int)
signal plot_purchased(plot_index: int)

var money: int = 5000
var day: int = 1
var owned_plots: Array = [true]
var max_plots: int = 9
var plot_prices: Array = [0, 300, 500, 800, 1200, 1800, 2500, 3500, 5000]
var house_level: int = 0
var machine_level: int = 0
var reputation: int = 0

var inventory: Dictionary = {}

func earn(value: int):
	money += value
	money_changed.emit(money)

func spend(value: int) -> bool:
	if money >= value:
		money -= value
		money_changed.emit(money)
		return true
	return false

func advance_day():
	day += 1
	day_changed.emit(day)
	for plot in get_tree().get_nodes_in_group("farm_plots"):
		plot.advance_day()

func buy_plot(index: int) -> bool:
	if owned_plots.has(index): return false
	if index < 0 or index >= plot_prices.size(): return false
	if spend(plot_prices[index]):
		owned_plots.append(index)
		owned_plots.sort()
		plot_purchased.emit(index)
		return true
	return false

func add_to_inventory(crop_name: String, count: int):
	if inventory.has(crop_name):
		inventory[crop_name] += count
	else:
		inventory[crop_name] = count

func sell_all() -> int:
	var total = 0
	for crop in inventory.keys():
		for t in CropData.CropType.values():
			var info = CropData.get_crop_info(t)
			if info.get("name") == crop:
				total += inventory[crop] * info["sell_price"]
				break
	inventory.clear()
	earn(total)
	return total

func save_game():
	var data = {
		"money": money,
		"day": day,
		"owned_plots": owned_plots,
		"house_level": house_level,
		"machine_level": machine_level,
		"reputation": reputation,
		"inventory": inventory
	}
	var file = FileAccess.open("user://savegame.json", FileAccess.WRITE)
	file.store_string(JSON.stringify(data))

func load_game() -> bool:
	if not FileAccess.file_exists("user://savegame.json"):
		return false
	var file = FileAccess.open("user://savegame.json", FileAccess.READ)
	var data = JSON.parse_string(file.get_as_text())
	if data == null: return false
	money = data.get("money", 5000)
	day = data.get("day", 1)
	owned_plots = data.get("owned_plots", [true])
	house_level = data.get("house_level", 0)
	machine_level = data.get("machine_level", 0)
	reputation = data.get("reputation", 0)
	inventory = data.get("inventory", {})
	return true

func new_game():
	money = 5000
	day = 1
	owned_plots = [true]
	house_level = 0
	machine_level = 0
	reputation = 0
	inventory = {}

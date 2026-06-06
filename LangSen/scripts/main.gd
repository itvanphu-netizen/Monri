extends Node

var game_manager: GameManager
var player: CharacterBody2D
var farm_tiles: Array = []
var ui_layer: CanvasLayer
var main_camera: Camera2D

const TILE_SIZE: Vector2 = Vector2(80, 80)
const GRID_COLS: int = 3
const GRID_ROWS: int = 3
const PLAYER_SPAWN: Vector2 = Vector2(360, 1100)

func _ready():
	game_manager = get_node("/root/GameManager")
	setup_world()
	setup_player()
	setup_tiles()
	setup_ui()

func setup_world():
	main_camera = Camera2D.new()
	main_camera.enabled = true
	add_child(main_camera)

	var bg = ColorRect.new()
	bg.color = Color("90ee90")
	bg.size = Vector2(720, 1280)
	bg.position = Vector2.ZERO
	bg.mouse_filter = Control.MOUSE_FILTER_IGNORE
	add_child(bg)

func setup_player():
	player = CharacterBody2D.new()
	player.name = "Player"
	var sprite = ColorRect.new()
	sprite.name = "ColorRect"
	sprite.size = Vector2(32, 32)
	sprite.color = Color("4169e1")
	player.add_child(sprite)
	var col = CollisionShape2D.new()
	var rect = RectangleShape2D.new()
	rect.size = Vector2(28, 28)
	col.shape = rect
	player.add_child(col)
	player.position = PLAYER_SPAWN
	add_child(player)
	
	var script = preload("res://scripts/player.gd")
	player.set_script(script)
	player._ready()

func setup_tiles():
	for i in range(GRID_ROWS * GRID_COLS):
		var tile = ColorRect.new()
		tile.name = "FarmTile" + str(i)
		tile.size = TILE_SIZE
		var row = i / GRID_COLS
		var col = i % GRID_COLS
		tile.position = Vector2(80 + col * 100, 100 + row * 100)
		add_child(tile)
		
		var prog = ProgressBar.new()
		prog.name = "ProgressBar"
		prog.size = Vector2(70, 10)
		prog.position = Vector2(5, 65)
		prog.max_value = 100
		prog.visible = false
		tile.add_child(prog)
		
		var tmr = Timer.new()
		tmr.name = "Timer"
		tmr.one_shot = true
		tile.add_child(tmr)
		
		var script = preload("res://scripts/farm_tile.gd")
		tile.set_script(script)
		tile.add_to_group("farm_plots")
		
		var owned = i == 0
		tile.setup(i, owned)
		tile._ready()
		
		farm_tiles.append(tile)

func setup_ui():
	ui_layer = CanvasLayer.new()
	ui_layer.name = "UI"
	add_child(ui_layer)
	
	var ui_script = preload("res://scripts/ui_controller.gd")
	var ui_node = Node.new()
	ui_node.name = "UIController"
	ui_node.set_script(ui_script)
	ui_layer.add_child(ui_node)
	
	ui_node._ready()

func add_plot(index: int):
	if index >= 0 and index < farm_tiles.size():
		farm_tiles[index].is_owned = true
		farm_tiles[index].visible = true
		farm_tiles[index].color = Color("8b4513")
		farm_tiles[index].modulate = Color(1,1,1,1)

func _input(event):
	if event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
		var click_pos = get_local_mouse_position()
		for tile in farm_tiles:
			if not tile.is_owned: continue
			var rect = Rect2(tile.position, tile.size)
			if rect.has_point(click_pos):
				if player.tool_mode == "plant" and player.selected_crop >= 0:
					if tile.plant(player.selected_crop):
						player.selected_crop = -1
				elif player.tool_mode == "harvest":
					var result = tile.harvest()
					if result:
						game_manager.add_to_inventory(result["name"], result["count"])
						get_node("UI/UIController").refresh_ui()
				break

func _on_ui_ready():
	pass

extends ColorRect

enum State { EMPTY, PLANTED, GROWING, READY }

var tile_state: int = State.EMPTY
var crop_type: int = -1
var growth_progress: float = 0.0
var max_grow_time: float = 1.0
var plot_index: int = 0
var is_owned: bool = true

@onready var progress_bar: ProgressBar = $ProgressBar
@onready var timer: Timer = $Timer

func _ready():
	color = Color("8b4513")
	update_visual()

func setup(index: int, owned: bool):
	plot_index = index
	is_owned = owned
	visible = owned
	if not owned:
		color = Color("444444")
		modulate = Color(1,1,1,0.3)

func plant(crop: int):
	if tile_state != State.EMPTY or not is_owned: return false
	crop_type = crop
	tile_state = State.PLANTED
	growth_progress = 0.0
	var info = CropData.get_crop_info(crop)
	max_grow_time = info["grow_time"] / 10.0
	color = Color("654321")
	update_visual()
	timer.start(1.0)
	return true

func advance_day():
	if not is_owned: return
	if tile_state == State.PLANTED:
		tile_state = State.GROWING
		growth_progress += 0.1
		update_visual()
	elif tile_state == State.GROWING:
		growth_progress += 1.0 / max_grow_time
		if growth_progress >= 1.0:
			growth_progress = 1.0
			tile_state = State.READY
			var info = CropData.get_crop_info(crop_type)
			color = info["icon_color"]
			modulate = Color(1,1,1,1)
		update_visual()

func harvest():
	if tile_state != State.READY: return null
	var info = CropData.get_crop_info(crop_type)
	var result = { "name": info["name"], "count": 1 }
	tile_state = State.EMPTY
	crop_type = -1
	growth_progress = 0.0
	color = Color("8b4513")
	update_visual()
	timer.stop()
	return result

func update_visual():
	if tile_state == State.EMPTY:
		progress_bar.value = 0
		progress_bar.visible = false
	elif tile_state == State.PLANTED or tile_state == State.GROWING:
		progress_bar.visible = true
		progress_bar.value = growth_progress * 100
	elif tile_state == State.READY:
		progress_bar.visible = false

func _on_timer_timeout():
	if tile_state == State.PLANTED:
		tile_state = State.GROWING
		update_visual()

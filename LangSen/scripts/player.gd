extends CharacterBody2D

const SPEED: float = 300.0

@onready var sprite: ColorRect = $ColorRect

var selected_crop: int = -1
var facing_dir: Vector2 = Vector2.DOWN
var tool_mode: String = "plant"  # plant or harvest

func _ready():
	sprite.color = Color("4169e1")

func _physics_process(_delta):
	var input_dir = Vector2(
		Input.get_axis("move_left", "move_right"),
		Input.get_axis("move_up", "move_down")
	)
	if input_dir != Vector2.ZERO:
		facing_dir = input_dir
		velocity = input_dir * SPEED
	else:
		velocity = Vector2.ZERO
	move_and_slide()
	sprite.visible = input_dir != Vector2.ZERO

func set_tool(mode: String):
	tool_mode = mode
	if mode == "harvest":
		sprite.color = Color("ff6347")
	else:
		sprite.color = Color("4169e1")

func set_crop(crop: int):
	selected_crop = crop

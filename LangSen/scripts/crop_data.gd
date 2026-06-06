extends Resource
class_name CropData

enum CropType { LUA, RAU_MUONG, CAI, BAP, KHOAI, DAU, DUA_HAU }

static func get_crop_info(type: CropType) -> Dictionary:
	match type:
		CropType.LUA:
			return {
				"name": "Lúa",
				"icon_color": Color("f0e68c"),
				"grow_time": 45,
				"buy_price": 200,
				"sell_price": 600,
				"description": "Cây lương thực chính, thời gian dài, lợi nhuận cao"
			}
		CropType.RAU_MUONG:
			return {
				"name": "Rau muống",
				"icon_color": Color("228b22"),
				"grow_time": 10,
				"buy_price": 50,
				"sell_price": 150,
				"description": "Ngắn ngày, xoay vòng nhanh"
			}
		CropType.CAI:
			return {
				"name": "Cải xanh",
				"icon_color": Color("32cd32"),
				"grow_time": 15,
				"buy_price": 60,
				"sell_price": 200,
				"description": "Phổ biến ở chợ quê"
			}
		CropType.BAP:
			return {
				"name": "Bắp",
				"icon_color": Color("ffd700"),
				"grow_time": 30,
				"buy_price": 120,
				"sell_price": 350,
				"description": "Trồng được nhiều vụ"
			}
		CropType.KHOAI:
			return {
				"name": "Khoai lang",
				"icon_color": Color("cd853f"),
				"grow_time": 25,
				"buy_price": 100,
				"sell_price": 280,
				"description": "Dễ trồng, ổn định"
			}
		CropType.DAU:
			return {
				"name": "Đậu xanh",
				"icon_color": Color("6b8e23"),
				"grow_time": 20,
				"buy_price": 80,
				"sell_price": 250,
				"description": "Ngắn ngày, giá ổn"
			}
		CropType.DUA_HAU:
			return {
				"name": "Dưa hấu",
				"icon_color": Color("ff6347"),
				"grow_time": 35,
				"buy_price": 150,
				"sell_price": 500,
				"description": "Mùa hè giá cao"
			}
	return {}

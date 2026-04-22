var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-entrance",
      "name": "1 Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.03131155468694047,
        "pitch": -0.036511699122286245,
        "fov": 1.2546747516555548
      },
      "linkHotspots": [
        {
          "yaw": -0.03564920152060935,
          "pitch": 0.011378757261363504,
          "rotation": 0,
          "target": "1-2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2-hall",
      "name": "2 Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.05798436053137124,
        "pitch": 0.019915472248506205,
        "fov": 1.2546747516555548
      },
      "linkHotspots": [
        {
          "yaw": -3.133593827343425,
          "pitch": 0.14717075530478496,
          "rotation": 0,
          "target": "0-1-entrance"
        },
        {
          "yaw": -0.8289928137704514,
          "pitch": 0.11891272092644023,
          "rotation": 0,
          "target": "2-3-oak-room"
        },
        {
          "yaw": 0.9074552666826534,
          "pitch": 0.14171941702786306,
          "rotation": 0,
          "target": "5-5-reception"
        },
        {
          "yaw": -0.002223359535058478,
          "pitch": -0.04797965546650573,
          "rotation": 0,
          "target": "3-4-bridal-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3-oak-room",
      "name": "3 Oak Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -3.124156997839254,
        "pitch": 0.19749509979764035,
        "fov": 1.2546747516555548
      },
      "linkHotspots": [
        {
          "yaw": 2.3916835522801483,
          "pitch": 0.10665612619629172,
          "rotation": 0,
          "target": "1-2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4-bridal-suite",
      "name": "4 Bridal Suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8400209071748161,
          "pitch": 0.10969601073412427,
          "rotation": 0,
          "target": "4-41-brides-bathroom"
        },
        {
          "yaw": -1.989990191432888,
          "pitch": 0.1430918159658532,
          "rotation": 0,
          "target": "1-2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-41-brides-bathroom",
      "name": "4.1 Bride's Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 2.6693627485215856,
        "pitch": 0.22717912157495768,
        "fov": 1.2546747516555548
      },
      "linkHotspots": [
        {
          "yaw": 2.9248009747633477,
          "pitch": -0.03748547728726237,
          "rotation": 0,
          "target": "3-4-bridal-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-5-reception",
      "name": "5 Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.073560875226521,
          "pitch": 0.058676117499741665,
          "rotation": 0,
          "target": "6-6-jr-bar"
        },
        {
          "yaw": -1.3327534784252926,
          "pitch": 0.05632226161323928,
          "rotation": 0,
          "target": "7-7-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-6-jr-bar",
      "name": "6 JR Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -1.5794379800741396,
        "pitch": 0.2208170691870457,
        "fov": 1.2546747516555548
      },
      "linkHotspots": [
        {
          "yaw": -3.1185916244918506,
          "pitch": 0.006344576791889267,
          "rotation": 0,
          "target": "5-5-reception"
        },
        {
          "yaw": -2.765958579982163,
          "pitch": 0.0025807427569581876,
          "rotation": 0,
          "target": "7-7-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-7-corridor",
      "name": "7 Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.020544253783096877,
        "pitch": 0.18982085133193216,
        "fov": 1.2546747516555548
      },
      "linkHotspots": [
        {
          "yaw": -0.04061760853251961,
          "pitch": 0.08266283861618362,
          "rotation": 0,
          "target": "10-9-ballroom"
        },
        {
          "yaw": 0.2666453868874772,
          "pitch": 0.1052533385194856,
          "rotation": 0,
          "target": "9-8-chefs-garden"
        },
        {
          "yaw": -3.080185278890518,
          "pitch": 0.013269088440459598,
          "rotation": 0,
          "target": "1-2-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-71-corridor-",
      "name": "7.1 Corridor ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 3.1191797782423905,
        "pitch": 0.08608129087567917,
        "fov": 1.2546747516555548
      },
      "linkHotspots": [
        {
          "yaw": -0.03987581613438351,
          "pitch": 0.0915560198244556,
          "rotation": 0,
          "target": "10-9-ballroom"
        },
        {
          "yaw": 0.2719255698157994,
          "pitch": 0.10034135496979246,
          "rotation": 0,
          "target": "9-8-chefs-garden"
        },
        {
          "yaw": -3.0800638501312747,
          "pitch": 0.0075735195789050636,
          "rotation": 0,
          "target": "5-5-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-8-chefs-garden",
      "name": "8 Chef's Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.18439026648976053,
        "pitch": 0.06804453018238554,
        "fov": 1.2546747516555548
      },
      "linkHotspots": [
        {
          "yaw": 2.981716320251377,
          "pitch": -0.022061108787831074,
          "rotation": 0,
          "target": "7-7-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-9-ballroom",
      "name": "9 Ballroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.46037054420796686,
          "pitch": 0.059028734643607805,
          "rotation": 0,
          "target": "8-71-corridor-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ipanema Solutions - 2026 Ballykealey House - Ireland",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};

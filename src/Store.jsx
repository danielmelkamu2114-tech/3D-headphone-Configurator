import { Palette } from "lucide-react";
import { proxy } from "valtio";

const state = proxy({
    intro:true,
    activepart:'all',
    colors:{
        cups:"#2563eb",
        slider:"#EBD4A7",
        cushion: "#9D5242FF"
    },

    palettes: {
        cups:[{ name: 'Blue', hex: '#2563eb' },
     {          name: 'Black', hex: '#18181b' }],
     slider:[{name:'golden', hex:"#EBD4A7"},
            {name:'white', hex:"#ffffff"}
     ],
     cushion:[{name:'brown', hex: "#9D5242FF"},
             {name:"black", hex:"#18181b"}]
     
    },
    headphonex:0,
    scale:1,
    rotationY:0,
    headphonescale:1,
    headphoney:-0.5
    

    
})

export {state}
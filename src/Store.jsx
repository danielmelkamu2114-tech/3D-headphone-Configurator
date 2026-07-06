import { Palette } from "lucide-react";
import { proxy } from "valtio";

const state = proxy({
    intro:true,
    activepart:'all',
    colors:{
        cups:"#ffffff",
        slider:"#ffffff",
        cushion: "#9D5242FF"
    },

    palettes: {
        cups:[{ name: 'whtie', hex: '#ffffff' },
              { name: 'blue silver', hex: '#b7babf' },
              { name: 'yellow', hex: '#ffff00' },
              { name: 'dark blue', hex: '#1e293b' }],
     slider:[{name:'golden', hex:"#EBD4A7"},
            {name:'Liquid Silver', hex:"#d1d5db"},
            {name:'Graphite', hex:"#374151"},
            {name:'Copper', hex:"#b45309"}
     ],
     cushion:[{name:'brown', hex: "#9D5242FF"},
               {name:"silver", hex:"#b7babf"},
             
             {name:"gold", hex:"#e0a899"},
             {name:"blue", hex:"#1e293b"}]
     
    },
    headphonex:0,
    scale:1,
    rotationY:0,
    headphonescale:1,
    headphoney:-0.5
    

    
})

export {state}
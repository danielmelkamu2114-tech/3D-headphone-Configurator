import React from 'react'
import { ShoppingCart, ShoppingCartIcon } from 'lucide-react'
import { snapshot, useSnapshot } from 'valtio'
import { state } from './Store'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitText from 'gsap/src/SplitText'
import { useProgress } from '@react-three/drei'
gsap.registerPlugin(SplitText, useGSAP)



const Overlay = () => {


const snap = useSnapshot(state)

  return (<>
 { snap.intro ?  <Intro/> : <Customizer/> }

</>
 )
}

export default Overlay




function Intro() {
const text1 = useRef()
const text2 = useRef()
const text3 = useRef()

useGSAP(()=>{
  const split1text = new SplitText(text1.current, {type:"lines"})
  const split2text =new SplitText(text2.current, {type:'lines'})
  gsap.from(split1text.lines, {xPercent:-100,
    duration:3.5,
    opacity:0,
    stagger: 0.1,
    ease:'expo.out' })
  
    gsap.from(split2text.lines,{
    opacity:0,
    duration:1.6,
    stagger: 0.1,
    delay:0.3,
    
  
  } )  
  gsap.from(text3.current,{
    opacity:0,
    duration:5,
   
  })
})


    
 return(<><header className=' items-center mx-auto pt-5 max-w-5xl  text-1xl' >
    <div className=' flex justify-between  md:w-full'>
        <div className='ml-4'>logo</div>
        <nav className='hidden sm:flex gap-20  bg-linear-to-bl from-gray-300 to-80%  rounded-full p-2 outline-1 outline-gray-400 outline-offset-1'> 
            <div>Home </div>
            <div>shop </div>
            <div>contacts</div>
        </nav>
        <div className='mr-4'><ShoppingCart/></div>

            
   </div>
</header>


<section className=' overflow-hidden max-w-5xl mx-auto px-auto items-center  p-3 md:pl-80 md:pt-15   md:w-screen md:h-screen '>
   
    <div className=' '>
    <div ref={text1}  className='  tracking-wide  leading-20 md:leading-26 font-[Arial] font-bold uppercase text-center md:text-left md:px-50 text-7xl md:text-8xl    mask-radial-from-neutral-500 text-zinc-950' >
       Let's
       Create 
       It!
         
    </div>
    
    <div ref={text2} className=' md:p-3 py-3 pr-3 pl-2 pt-5 shadow shadow-2xl shadow-amber-300/30  mb-10 md:ml-80 text-sm max-w-100'>
Create your unique and exclusive headphone with our brand new 3D configurator tool. Unleash your imagination, customize every detail, and <strong>define your own sonic style.</strong>  </div>
   <div ref={text3} className='text-center  pt-60 md:pt-0 '>
    <button onClick={()=>{
         
        const width = window.innerWidth
        const isMobile = width < 640
        const isTablet = width >= 640 && width < 1024
     
    const targetX = isMobile ? 0 : isTablet ? 0 : -7
    const targetY = isMobile ? 7 : isTablet ? 0.1 : -0.2
    const targetScale = isMobile ? 1 : isTablet ? 1.1 : 0.8
    const targetRotationY = isMobile ? -0.4 :isTablet ? -0.6 : -0.6
        
        gsap.to(state, {
        headphonex: targetX,
        headphoney:targetY,
        rotationY:targetRotationY,
         headphonescale: targetScale,

        duration:1.7,

        ease:'power1.out' 

      })
      state.intro = false}}
    className='pointer-events-auto bg-amber-400 md:ml-46 py-2 px-5  md:text-left rounded-sm font-medium text-amber-50 '>Customize it</button>
   </div>
   </div>
</section></>)   
}


function Customizer(){

  const text3 = useRef()
  const text4 = useRef()
  const text5 = useRef()
  const button = useRef()
  const button1 = useRef()

  const {loaded} = useProgress()
 const containerScope = useRef()

useGSAP(()=>{
  if (!loaded) return
    const split3text = new SplitText(text3.current, {type:"lines"})
    const split4text = new SplitText(text4.current, {type:"lines"})

  
   gsap.from(split3text.lines,{
    xPercent:-100,
    duration:2,
    opacity:0,
    stagger: 0.1,
    ease:'expo.out'   } )

  gsap.from(split4text.lines,{
    opacity:0,
    duration:2,
    stagger: 0.12,
    delay:.5,
    
    force3D:true
  } )  
  gsap.from(text5.current,{
    opacity:0,
    duration:5,
   
  })

gsap.from(button.current, {
    opacity:0,
    duration:1.5,
    delay:0.5,
    ease: 'power2.out'
   
  })
  gsap.from(button1.current, {
    opacity:0,
    duration:1.5,
    delay:0.5,
    ease: 'power2.out'
   
  })
  gsap.from(".part-nav-btn", {
    
    yPercent:100,
    duration:1,
    opacity:0,
    ease:'power1.out'
  })
  
  
  
  , { scope: containerScope, dependencies: [loaded] }})







     const headphoneParts = [
  { id: 'all', label: 'Full Headset' },
  { id: 'cups', label: 'Ear Cups' },
  { id: 'cushion', label: 'Cushions' },
  { id: 'slider', label: 'Slider' },
];
const snap = useSnapshot(state)

    return(<>
    
    <section className='  overflow-hidden '>
        <div>
            <header>
                <div  className=' text-right pr-5 md:pr-55 pt-4'>
           
                   <button 
                   ref={button}
                   onClick={()=>{

        const width = window.innerWidth
        const isMobile = width < 640
        const isTablet = width >= 640 && width < 1024
     
     const targetX = isMobile ? 0 : isTablet ? 0 : 0
    const targetY = isMobile ? -1 : isTablet ? -0.5 : -0.5
    const targetScale = isMobile ? 1 : isTablet ? 1.1 : 0.8
    const targetRotationY = isMobile ? -0.4 :isTablet ? -0.6 : -0.6

                      gsap.to(state, {
                          headphonex:targetX,
                          headphoney:targetY,
                          rotationY:0,
                          headphonescale: targetScale,

                          duration:1.8,

                          ease:'power1.out'

      })(state.intro=true)}}
                    className='pointer-events-auto bg-black ml-46 md:py-2 md:px-5 p-3 py-2 text-left rounded-sm font-medium text-amber-50' 
                    >Go Back</button>
                    </div>

                
            </header>
            <div className='  mt-65 flex flex-col md:gap-10   gap-8 items-left md:m-30 md:mt-30' >
               
                <div ref={text3} className=' sm:flex flex-col text-center md:text-left md:text-7xl text-4xl  font-bold mask-b-from-cyan-800 '>
                    <h1> Just relax and </h1>
                <div>
                 <h1> Go with the flow!</h1>
                </div>
                </div>
                 <div ref={text4} className=' text-sm max-w-100 text-center px-auto md:text-left mt-4 shadow '>
                    A configurator which you can customize <br /> The color for each part of the headphone <br /> And add premade stickers!! 
                </div>
              
                <div className='  text-center md:text-left md:ml-2'>
                    <button ref={text5} className=' md:ml-46  py-2 px-5 text-center md:text-left rounded-sm font-medium text-amber-50 bg-amber-400'>Buy Now!</button>
                </div>
            </div>
            <div className=' flex md:flex-row flex-col justify-between max-w-7xl items-center '>
            <div className=' md:mr-1 md:order-1 md:pl-3     pt-2'>
               <button ref={button1} className='bg-black  mx-auto md:ml-30   py-2 px-6 md:px-auto text-left  rounded-sm font-medium text-amber-50'>Take Photo</button>
            </div>

            <div  className='bg-grey-100 shadow pointer-events-auto flex py-3 md:px-30 flex-col-2 md:flex-wrap pr-3   gap-3 '> 
              { headphoneParts.map((part)=>(
                <button 
               
                 key={part.id}  
               className='part-nav-btn transition-all duration-200 active:scale-90 rounded-md px-2 py-2 pointer-events-auto  text-amber-50  bg-gray-900/50 '
              //  style={{backgroundColor :'#ffffff'}}
               onClick={()=>{state.activepart = part.id}}>
               {part.label} </button>
              ))}

            </div>

     <Colorpicker/>
     
     
        </div>

        </div>
    </section>
    </>)
        
   
}

function Colorpicker(){

 

  

    const snap = useSnapshot(state)
    const pickerRef = useRef()
      useGSAP(() => {
    gsap.from(".part-nav-btn", {
      yPercent: 100,
      opacity: 0.01,
      duration: 1,
      ease: 'power2.out',
      force3D: true
    })
  }, { scope: pickerRef, dependencies: [snap.activepart] })



  // 1. Guard Clause: If no part is selected, hide the entire bar completely
  if (snap.activepart === 'all') return null


  // 2. Get the specific array of color objects for the currently active part
  const activePalette = snap.palettes[snap.activepart] || []

  return (
    <div ref={pickerRef} className="  md:bottom-6   bottom-30 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-zinc-800/90 ml-32 backdrop-blur-md p-4 rounded-2xl border border-zinc-800 shadow-2xl animate-fade-in-up">
      
     

      <div className="h-6 w-[1px] bg-white" /> {/* Vertical divider line */}

      {/* 3. Render only the custom colors for this part */}
      <div className=" flex  flex-col md:flex-row  gap-3">
        {activePalette.map((colorObj) => {
          // Check if this circle matches the currently applied color for this specific part
          const isSelected = snap.colors[snap.activepart] === colorObj.hex

          return (
            <button
              key={colorObj.hex}
              onClick={() => {
                // Update the color for ONLY the active part in our store
                state.colors[state.activepart] = colorObj.hex
              }}
              className={'part-nav-btn pointer-events-auto md:w-9 md:h-9 w-8 h-8 rounded-full border transition-all duration-200 active:scale-90 relative'}
              
              style={{ backgroundColor: colorObj.hex }}
              title={colorObj.name} // Shows name when user hovers over the circle
            />
          )
        })}
      </div>
    </div>
  )
}





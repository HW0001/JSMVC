import $ from "jquery"

const  eventBus = $(window)
const m = {
    data:{
        n:100
    }
    ,add(){
        m.data.n++
        m.notify()
    },
    sub(){
        m.data.n--
        m.notify()
    },
    notify(){
        eventBus.trigger("notify")
    }
}

const v = {
    el:"#app",
    html:` 
        <span id="txt">{{x}}</span>
        <div>
            <button id="btn1">+</button>
            <button id="btn2">-</button>
        </div>`,
    render(n){
        v.el.empty()
        v.el.append($(v.html.replace("{{x}}",n)))
    }
}

const  c ={
    init(){
        v.el=$(v.el)
        v.render(m.data.n)
        eventBus.on("notify",()=>{v.render(m.data.n)})
        c.events()
    },
    events(){
       v.el.on("click","#btn1",m.add)
       v.el.on("click","#btn2",m.sub)
    }
}
c.init()
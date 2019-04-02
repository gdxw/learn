function machine(name){
    console.log(`start ${name}`);
    this.do = (todo)=>{
        console.log(name, todo);
    }

    this.wait = async (time)=>{
        setTimeout(()=>{

        }, time * 1000)
    }
}

machine('ygy').execute();
// start ygy

machine('ygy').do("eat").execute(); 
// start ygy
// ygy eat

machine('ygy').wait(5).do("eat").execute(); 
// start ygy
// wait 5s(这里等待了5s)
// ygy eat

machine('ygy').waitFirst(5).do("eat").execute(); 
// wait 5s
// start ygy
// ygy eat
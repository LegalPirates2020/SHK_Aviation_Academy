const gsapt = gsap.timeline();

// .chairman, .vice-chairman, .principal


const gsapdiv = (divname) => {
    gsap.from(divname, {
        y : -50,
        duration : 0.5,
        scrollTrigger : {
            trigger : divname,
            duration : 1
        }
    })
}

gsapdiv(".content-top")
gsapdiv(".chairman")
gsapdiv(".vice-chairman")
gsapdiv(".principal")
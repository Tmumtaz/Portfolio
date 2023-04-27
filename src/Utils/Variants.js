export const FadeInLeftVariant = {
    hidden: {
        x: -50,
        opacity:0
    },
    visible : {
        x: 0,
        opacity:1,
        transition: {
            type:'tween',
            duration: 1.2,
            delay:0.2
        }
    }
}
export const FadeInRightVariant = {
    hidden: {
        x: 80,
        opacity:0
    },
    visible : {
        x: 0,
        opacity:1,
        transition: {
            type:'tween',
            duration: 1.2,
            delay:0.2
        }
    }
}

export const FadeInTopVariant = {
    hidden: {
        y: -50,
        opacity:0
    },
    visible : {
        y: 0,
        opacity:1,
        transition: {
            type:'tween',
            duration: 1.2,
            delay:0.3
        }
    }
}
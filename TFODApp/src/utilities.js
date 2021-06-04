// Define our labelmap
const labelMap = {
    1:{name:'ThumbsUp', color:'cyan'},
    2:{name:'ThumbsDown', color:'black'},
    3:{name:'ThankYou', color:'lime'},
    4:{name:'LiveLong', color:'white'},
    5:{name:'Welcome', color:'pink'},
    6:{name:'Yes', color:'#ccffcc'},
    7:{name:'Hello', color:'yellow'},
    8:{name:'No', color:'red'}
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 5
            ctx.fillStyle = 'color'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth*0.6, height*imgHeight*0.7);
            ctx.stroke()
        }
    }
}
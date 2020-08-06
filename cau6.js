function solution(input){
    /*
    Tạo một Basic Calculator (chương trình máy tính đơn giản) dựa vào dữ liệu input
    */
    for(let i=0;i<input.length;i++){
        if(input[i]==="*"){
            let a=input[i-1];
            let b=input[i+1];
            input.splice(i-1,3,a*b);
            for(let j=0;j<input.length;j++){
                if(input[j]==="-"){
                    let a=input[j-1];
                    let b=input[j+1];
                    input.splice(j-1,3,a-b);
                    for(let z=0;z<input.length;z++){
                        if(input[z]==="+")
                        {
                            let c=input[z-1];
                            let d=input[z+1];
                            input.splice(z-1,3,c+d);
                        }
                    }
                }
                else if(input[j]==="+"){
                    let a=input[j-1];
                    let b=input[j+1];
                    input.splice(j-1,3,a+b);
                    for(let z=0;z<input.length;z++){
                        if(input[z]==="-")
                        {
                            let c=input[z-1];
                            let d=input[z+1];
                            input.splice(z-1,3,c-d);
                        }
                    }
                }
            }
        }
        else if(input[i]==="+"){
            let ok=1;
            for(let index=i;index<input.length;index++){
                if(input[index]==="*"||input[index]==="/")ok=0;
            }
            if(ok===1){
                let a=input[i-1];
                let b=input[i+1];
                input.splice(i-1,3,a+b);
            }
        }
        else if(input[i]==="-"){
            let ok=1;
            for(let index=i;index<input.length;index++){
                if(input[index]==="*"||input[index]==="/")ok=0;
            }
            if(ok===1){
                let a=input[i-1];
                let b=input[i+1];
                input.splice(i-1,3,a-b);
            }
        }
        else if(input[i]==="/"){
            let a=input[i-1];
            let b=input[i+1];
            input.splice(i-1,3,a/b);
            for(let j=0;j<input.length;j++){
                if(input[j]==="-"){
                    let a=input[j-1];
                    let b=input[j+1];
                    input.splice(j-1,3,a-b);
                    for(let z=0;z<input.length;z++){
                        if(input[z]==="+")
                        {
                            let c=input[z-1];
                            let d=input[z+1];
                            input.splice(z-1,3,c+d);
                        }
                    }
                }
                else if(input[j]==="+"){
                    let a=input[j-1];
                    let b=input[j+1];
                    input.splice(j-1,3,a+b);
                    for(let z=0;z<input.length;z++){
                        if(input[z]==="-")
                        {
                            let c=input[z-1];
                            let d=input[z+1];
                            input.splice(z-1,3,c-d);
                        }
                    }
                }
            }
        }
    }
    return input[0]; 
}
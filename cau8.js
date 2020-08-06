function solution(input){
    /*
    Xác định input có phải là 1 "special array" hay không
    "special array" được định nghĩa là:
    + giá trị tại vị trí index chẳn sẽ là số chẳn
    + giá trị tại vị trí index lẽ sẽ là số lẽ
    
    */
    if(input.length===0)return false;
    for(let i in input){
        if((i%2===0&&(input[i]%2!=0||input[i]<0))||(i%2!=0&&(input[i]%2===0||input[i]<0))){
            return false;
        }
    }
    return true;
}
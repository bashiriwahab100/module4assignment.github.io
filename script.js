var names = new Array()
names[0]="Yaako"
names[1]="John "
names[2]="Jen"
names[3]="Jason"
names[4]="Paul"
names[5]="Frank"
names[6]="Larry"
names[7]="paula"
names[8]="Laura"
names[9]="Jim"

for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)==='J'){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }
}





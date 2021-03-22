function add_del(user_id_1, user_id_2, user_id_3)  {
   let h0 =+ document.getElementById(user_id_1).value;
   let v0 =+ document.getElementById(user_id_2).value;
   let sin =+ document.getElementById(user_id_3).value;
   let fall = v0 * sin/9.8 + Math.sqrt((v0)**2 * sin**2/9.8 + 2 + h0/9.8);
   alert("Время падения: " + fall);
   let fly = (v0*sin)*fall;
   alert("Дальность полета: " + fly);
   let speed = Math.sqrt((v0*sin)**2+(v0*sin-9.8*fall)**2)
   alert("Скорость падения: " + speed);
   let find = h0 + v0**2*sin**2/2*9.8;
   alert("Найдена максимальная высота подьема: " + find);
}

function add_del_2(user_id_1, user_id_2, user_id_3, user_id_4, user_id_5)  {
   let m1 =+ document.getElementById(user_id_1).value;
   let m2 =+ document.getElementById(user_id_2).value;
   let l =+ document.getElementById(user_id_3).value;
   let x1 =+ document.getElementById(user_id_4).value;
   let x2 =+ document.getElementById(user_id_5).value;
   let f1 =m1*10;
   let f2 =m2*10;
   let num_1 =x1;
   let num_2 =l/2-x2;
   let num_3 =l/2-x1;
   let f =(-f1*num_1+f2*num_2)/num_3;
   let n1 =f1*num_1;
   let n2 =f2*num_2;
   let n3 =f*num_3;
   let k =-n1+n2-n3;
   let j =-f1*num_1+f2*num_2-f*num_3;
   alert(j)

}

function add_del_3(user_id_1, user_id_2, user_id_3, user_id_4 )  {
   let m1 =+ document.getElementById(user_id_1).value;
   let m2 =+ document.getElementById(user_id_2).value;
   let t =+ document.getElementById(user_id_3).value;
   let v =+ document.getElementById(user_id_4).value;
   let sum = ((100000*0.029)/(8.31*(t+273)))*v-m1-m2;
   alert(sum)
}

function add_del_4(user_id_1, user_id_2, user_id_3)  {
   let s =+ document.getElementById(user_id_1).value;
   let n =+ document.getElementById(user_id_2).value;
   let g =+ document.getElementById(user_id_3).value;
   let t = 100 / n;
   let ph = (((4*Math.pow(3.14, 2))/Math.pow(t, 2))*0.1*s)/g;
   alert(ph)
}
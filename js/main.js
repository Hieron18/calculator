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
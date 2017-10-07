var students = [
  {name:"学生甲-",score:92},
  {name:"学生乙-",score:67},
  {name:"学生丙-",score:78},
  {name:"学生丁-",score:45},
  {name:"学生戊-",score:88}];
for (var i=0 ; i<5 ; i++)
  for (var a=i+1;a<5;a++)
  if (students[i].score>students[a].score)
{
    t=students[i]
    students[i]=students[a]
    students[a]=t
}
for (var x=0;x<5;x++)
    console.log(students[x].name + students[x].score)
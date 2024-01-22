// const users =[
//     {
//     id: 1,
//     name: "pavel",
//     age:24
// },
// {
//      id: 2,
//     name: "lena",
//     age:21
// }
// ];
// for(user of users){
//     if (user.age>22){
//     console.log(user.name)
//     }
// }

// users.forEach(elem=>{
//     if(elem.age>22){
//         console.log(elem.name)
//     }
// })

// users
//     .filter(({age})=>age>22)
//     .forEach(({name , age})=>console.log(name , age))

//     const obj={
//         a:12,
//         b:17,
//         c:21
//     }

//     const {a,b,c,} = obj

//     console.log(a+" "+b)

//     // function handler({a,b}){
//     //   //  const{a,b}=obj
//     //     console.log(a,b)
//     // }
//     // handler(obj)


//     // const result =  users.filter(({id}) =>id%2===0)
//     // .map(({name})=>name)
//     // console.log(result)

//     const product=[
//         {
//             name: "Ноутбук",
//             price: 1200,
//             brand: "Acer",
//             inStock: true
//         },
//         {
//             name: "Смартфон",
//             price: 500,
//             brand: "Samsung",
//             inStock: false
//         },
//         {
//             name: "Планшет",
//             price: 300,
//             brand: "Apple",
//             inStock: true
//         },
//         {
//             name: "Клавиатура",
//             price: 50,
//             brand: "Samsung",
//             inStock: true
//         }
//     ];

//     const result= product.filter(({inStock})=>inStock)

//     const resultat= product.filter(({brand})=>brand==="Samsung")
//     .map(({name})=>name)
//     console.log(resultat)
// const number=[12,34,5,6,8,95,3]
//     console.log(number.reduce((acc,elem) =>acc+elem))
//     console.log(number.reduce((acc,elem) =>acc*elem))
//     console.log(number.reduce((acc,elem)=>acc>elem? acc : elem))

//     console.log(product.reduce((acc,elem) =>acc + elem.price,0))
//     console.log(product.reduce((acc,elem) =>acc< elem.price ? acc : elem.price,Infinity))


const employees = [
    { name: 'Alice', salary: 5000 },
    { name: 'Bob', salary: 6000 },
    { name: 'Charlie', salary: 4500 }
  ];

  console.log(employees.map(({salary})=>salary*2))

  console.log(employees.filter(({salary})=>salary>5500))

  console.log(employees.reduce((acc,{salary}) =>acc+salary,0))

  console.log(employees.map(({name})=>name.toUpperCase()))

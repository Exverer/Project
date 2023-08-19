function Info(O : number ,N :number ) {
    let unit:number = N-O
    return unit
}

function Bill(elec :number) {
    const unit = Info(10,20)
    let price = unit*elec
    return price
}
console.log(Bill(9))

const x = 18




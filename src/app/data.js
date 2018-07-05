/*
    Notes
        - Storing prices in cents, although now that I think about it I don't know if it
          makes a difference, since I'm not actually sure if JS integer math is free of FP
          errors due to numbers being implemented as float. If I was doing this for real
          I'd be looking up how other people with NodeJS back-ends deal with currency
        - Obviously only dealing with AUD here, bit more involved in a real app.
*/

export const productPriceList = {
    classic: 26999,
    standout: 32299,
    premium: 39499,
}

export const select = (car) => {
    console.info("cars: ", car.model)
    return {
        type: "CAR_SELECTED",
        payload: car
    }
}

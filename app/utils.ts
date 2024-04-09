
const houses: { [key: string]: any } = {
    "house1": {
        "images": [
            "test1",
            "test2",
        ],
        "title": "Sample Title",
        "description": "This is a very basic description",
    },
    "house2": {
        "images": [
            "",
            "",
        ],
        "title": "",
        "description": "",
    },
}

export const getProductInfo = (id: string): any => {
    const value = houses[id];
    if (value !== undefined) {
        return value;
    } else {
        return null;
    }
}
import {sortByFilter} from "../pages/Main/Main";

test('sort by rating', () => {
    const goods = [
        {
            id: 0,
            price: 10000,
            rating: 4
        },
        {
            id: 1,
            price: 1000,
            rating: 2
        },
        {
            id: 2,
            price: 3000,
            rating: 3
        }
    ];

    const sortedByRate = [
        {
            id: 0,
            price: 10000,
            rating: 4
        },
        {
            id: 2,
            price: 3000,
            rating: 3
        },
        {
            id: 1,
            price: 1000,
            rating: 2
        }
    ];

    expect(sortByFilter('rating', goods)).toStrictEqual(sortedByRate);
});
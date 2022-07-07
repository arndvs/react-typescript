import { data } from './data';

export type DogFactType = {
    id: number;
    fact: string;
};

// These are here just in case the API goes down. 🤷

export const fetchDogFacts = (n: number) => {
    var shuffle = require('lodash.shuffle');
    return Promise.resolve(data).then((facts) => shuffle(facts).slice(0, n));
};

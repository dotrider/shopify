import Commerce from '@chec/commerce.js';

//Creating instansce from store
export const commerce = new Commerce(process.env.REACT_APP_COMMERCE_KEY, true);
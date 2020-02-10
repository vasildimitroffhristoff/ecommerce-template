# Ecommerce Template  :point_right: [Live](https://ecommerce-react-app-live.herokuapp.com/)

Techologies used: 
- React, Redux,TypeScript, Firebase

![Image](https://res.cloudinary.com/dctggpdo6/image/upload/v1581147700/git%20repos/Screenshot_from_2020-02-08_09-41-14.png)

### Directory Structure

The sources of the project follows this structure:

```
/src
  /redux
    /{domain}
      /{domain}.actions.tsx
      /{domain}.reducer.tsx
      /{domain}.selector.tsx
      /{domain}.types.tsx
      /{domain}.utils.tsx
  /components
    /{component}
      /{component}.tsx
      /{component}.styles.scss
      /index.tsx
      /types.tsx
 /pages
    /{page}
      {page}.tsx
      {page}.styles.scss
      types.tsx
      index.tsx
      
```

### Todo:

- [ ] Typescript improvements
- [ ] Write tests
- [x] ~~Refactor to use React hooks~~
- [x] ~~Performance optimization *(lazy loading, suspense, memo)*~~
- [ ] Serve data from Firebase
- [ ] Stripe payments

const resolveRoutes = (route) => {
    //console.log(route);
    // if (route.length <= 3) {
    //     let validRoute = route === '/' ? route : '/:id';
    //     return validRoute;
    // }
    if (route == '/' ) {
        return '/';
    }else if (route == '/about' ){
        return '/about';
    }else if(route.includes('/character/?')){//si esta haciendo un filtrado
        return '/character'; 
    }else if(route.includes('/character')){//si no tiene el ? es porque se quiere acceder a un personaje
        return '/:id';
    }

    return `/${route}`;

};

export default resolveRoutes;
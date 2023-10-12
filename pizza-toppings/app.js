const pizzaTypes = document.getElementById('pizza-types');

function changePizzaType(){
    switch (pizzaTypes.selectedIndex){
        case 1:
            document.getElementById('base-pomodoro-item').classList.remove('hide');
            document.getElementById('mozarella-item').classList.remove('hide');
            document.getElementById('fontina-item').classList.add('hide')
            document.getElementById('emmental-item').classList.add('hide');
            document.getElementById('gorgonzola-item').classList.add('hide')
            document.getElementById('parmigiano-item').classList.add('hide')
            document.getElementById('prosciutto-item').classList.add('hide');
            document.getElementById('peperoncini-item').classList.add('hide');
            document.getElementById('salame-item').classList.add('hide')
            document.getElementById('olive-item').classList.add('hide');
            document.getElementById('cipolla-item').classList.add('hide');
            document.getElementById('funghi-item').classList.add('hide');
            document.getElementById('carciofini-item').classList.add('hide');
            document.getElementById('acciughe-item').classList.add('hide');
            document.getElementById('pomodoro-item').classList.add('hide')
            document.getElementById('origano-item').classList.remove('hide')
            document.getElementById('basilico-item').classList.remove('hide');
            document.getElementById('pepe-item').classList.add('hide');
            break;

        case 2:
            document.getElementById('base-pomodoro-item').classList.add('hide');
            document.getElementById('mozarella-item').classList.remove('hide');
            document.getElementById('fontina-item').classList.remove('hide')
            document.getElementById('emmental-item').classList.add('hide');
            document.getElementById('gorgonzola-item').classList.remove('hide')
            document.getElementById('parmigiano-item').classList.remove('hide')
            document.getElementById('prosciutto-item').classList.add('hide');
            document.getElementById('peperoncini-item').classList.add('hide');
            document.getElementById('salame-item').classList.add('hide')
            document.getElementById('olive-item').classList.add('hide');
            document.getElementById('cipolla-item').classList.add('hide');
            document.getElementById('funghi-item').classList.add('hide');
            document.getElementById('carciofini-item').classList.add('hide');
            document.getElementById('acciughe-item').classList.add('hide');
            document.getElementById('pomodoro-item').classList.add('hide')
            document.getElementById('origano-item').classList.add('hide')
            document.getElementById('basilico-item').classList.add('hide');
            document.getElementById('pepe-item').classList.remove('hide');
            break;
        
        case 3:
            document.getElementById('base-pomodoro-item').classList.remove('hide');
            document.getElementById('mozarella-item').classList.remove('hide');
            document.getElementById('fontina-item').classList.add('hide')
            document.getElementById('emmental-item').classList.remove('hide');
            document.getElementById('gorgonzola-item').classList.add('hide')
            document.getElementById('parmigiano-item').classList.add('hide')
            document.getElementById('prosciutto-item').classList.add('hide');
            document.getElementById('peperoncini-item').classList.remove('hide');
            document.getElementById('salame-item').classList.remove('hide')
            document.getElementById('olive-item').classList.add('hide');
            document.getElementById('cipolla-item').classList.add('hide');
            document.getElementById('funghi-item').classList.add('hide');
            document.getElementById('carciofini-item').classList.add('hide');
            document.getElementById('acciughe-item').classList.add('hide');
            document.getElementById('pomodoro-item').classList.add('hide')
            document.getElementById('origano-item').classList.add('hide')
            document.getElementById('basilico-item').classList.add('hide');
            document.getElementById('pepe-item').classList.add('hide');
            break;
        
        case 4:
            document.getElementById('base-pomodoro-item').classList.remove('hide');
            document.getElementById('mozarella-item').classList.add('hide');
            document.getElementById('fontina-item').classList.add('hide')
            document.getElementById('emmental-item').classList.add('hide');
            document.getElementById('gorgonzola-item').classList.add('hide')
            document.getElementById('parmigiano-item').classList.add('hide')
            document.getElementById('prosciutto-item').classList.remove('hide');
            document.getElementById('peperoncini-item').classList.add('hide');
            document.getElementById('salame-item').classList.add('hide')
            document.getElementById('olive-item').classList.remove('hide');
            document.getElementById('cipolla-item').classList.add('hide');
            document.getElementById('funghi-item').classList.remove('hide');
            document.getElementById('carciofini-item').classList.remove('hide');
            document.getElementById('acciughe-item').classList.add('hide');
            document.getElementById('pomodoro-item').classList.add('hide')
            document.getElementById('origano-item').classList.add('hide')
            document.getElementById('basilico-item').classList.add('hide');
            document.getElementById('pepe-item').classList.add('hide');
            break;
        
        case 5:
            document.getElementById('base-pomodoro-item').classList.remove('hide');
            document.getElementById('mozarella-item').classList.remove('hide');
            document.getElementById('fontina-item').classList.add('hide')
            document.getElementById('emmental-item').classList.add('hide');
            document.getElementById('gorgonzola-item').classList.add('hide')
            document.getElementById('parmigiano-item').classList.add('hide')
            document.getElementById('prosciutto-item').classList.add('hide');
            document.getElementById('peperoncini-item').classList.add('hide');
            document.getElementById('salame-item').classList.add('hide')
            document.getElementById('olive-item').classList.add('hide');
            document.getElementById('cipolla-item').classList.add('hide');
            document.getElementById('funghi-item').classList.remove('hide');
            document.getElementById('carciofini-item').classList.add('hide');
            document.getElementById('acciughe-item').classList.add('hide');
            document.getElementById('pomodoro-item').classList.add('hide')
            document.getElementById('origano-item').classList.remove('hide')
            document.getElementById('basilico-item').classList.add('hide');
            document.getElementById('pepe-item').classList.add('hide');
            break;
        
        case 6:
            document.getElementById('base-pomodoro-item').classList.remove('hide');
            document.getElementById('mozarella-item').classList.add('hide');
            document.getElementById('fontina-item').classList.add('hide')
            document.getElementById('emmental-item').classList.add('hide');
            document.getElementById('gorgonzola-item').classList.add('hide')
            document.getElementById('parmigiano-item').classList.add('hide')
            document.getElementById('prosciutto-item').classList.add('hide');
            document.getElementById('peperoncini-item').classList.add('hide');
            document.getElementById('salame-item').classList.add('hide')
            document.getElementById('olive-item').classList.add('hide');
            document.getElementById('cipolla-item').classList.add('hide');
            document.getElementById('funghi-item').classList.add('hide');
            document.getElementById('carciofini-item').classList.add('hide');
            document.getElementById('acciughe-item').classList.remove('hide');
            document.getElementById('pomodoro-item').classList.remove('hide')
            document.getElementById('origano-item').classList.remove('hide')
            document.getElementById('basilico-item').classList.add('hide');
            document.getElementById('pepe-item').classList.add('hide');
            break;
        
        case 7:
            document.getElementById('base-pomodoro-item').classList.remove('hide');
            document.getElementById('mozarella-item').classList.remove('hide');
            document.getElementById('fontina-item').classList.add('hide')
            document.getElementById('emmental-item').classList.add('hide');
            document.getElementById('gorgonzola-item').classList.add('hide')
            document.getElementById('parmigiano-item').classList.add('hide')
            document.getElementById('prosciutto-item').classList.remove('hide');
            document.getElementById('peperoncini-item').classList.add('hide');
            document.getElementById('salame-item').classList.add('hide')
            document.getElementById('olive-item').classList.add('hide');
            document.getElementById('cipolla-item').classList.add('hide');
            document.getElementById('funghi-item').classList.remove('hide');
            document.getElementById('carciofini-item').classList.remove('hide');
            document.getElementById('acciughe-item').classList.add('hide');
            document.getElementById('pomodoro-item').classList.add('hide')
            document.getElementById('origano-item').classList.add('hide')
            document.getElementById('basilico-item').classList.add('hide');
            document.getElementById('pepe-item').classList.add('hide');
            break;
    }
}

pizzaTypes.addEventListener('change',changePizzaType);

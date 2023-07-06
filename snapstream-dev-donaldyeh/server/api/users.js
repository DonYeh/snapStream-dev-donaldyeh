const users = [
    {
        id: 1,
        name: 'Fred',
        team: 'Team A',
    },
    {
        id: 2,
        name: 'Patrick',
        team: 'Team B',
    },
    {
        id: 3,
        name: 'Jon',
        team: 'Team A',
    },
    {
        id: 4,
        name: 'Aaron',
        team: 'Team A',
    },
    {
        id: 5,
        name: 'Katie',
        team: 'Team B',
    },
    {
        id: 6,
        name: 'Pete',
        team: 'Team B',
    },
    {
        id: 7,
        name: 'Gerard',
        team: 'Team A',
    },
    ]
    
    export default defineEventHandler(()=>{
    
        return {
            users
        }
    }) 
    
    
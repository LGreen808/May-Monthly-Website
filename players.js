const players = [
    {
        firstName:'Nicolas',
        lastName:'Aube-Kubel',
        position:'Right Wing' ,
        age: 29,
        photo:'imgs/1st.png',
        hiddenFact: 'Even though he now plays for the Ranger he actually scored his first NHL goal against the Rangers'
    },

     {
        firstName : 'Brett',
        lastName : 'Berard',
        position: 'Left Wing',
        age: 22,
        photo: 'imgs/2nd.png',
        hiddenFact: 'He was drafted by the Rangers in 2020, in the 5th round'
    },

    {
        firstName:'Jonny',
        lastName :'Brodzinski',
        position: 'Center',
        age: 31,
        photo: 'imgs/3rd.png',
        hiddenFact: 'When he was in high school he was actually teammates with another player in the NHL Nick Bjugstad'
    },

     {
        firstName:'Sam',
        lastName : 'Carrick',
        position: 'Center',
        age: 33,
        photo: 'imgs/4th.png',
        hiddenFact: 'His brother Trevor also played in the NHL'
    },

     {
        firstName:'Will',
        lastName :'Cuylle',
        position: 'Left Wing',
        age: 23,
        photo: 'imgs/5th.png',
        hiddenFact: 'He was drafted in 2020 by the New York Rangers in the 2nd round of the draft.'
    },
    {
        firstName:'Adam',
        lastName :'Edstrom',
        position: 'Center',
        age: 24,
        photo: 'imgs/6th.png',
        hiddenFact: 'He was born in Karlstad Sweden'
    },
    {
        firstName:'Arthur',
        lastName :'Kaliyev',
        position: 'Right Wing',
        age: 23,
        photo: 'imgs/7th.png',
        hiddenFact: 'He was in the OHL Second All-Star Team in (2019) and in the OHL First All-Star Team in (2020)'
    },
    {
        firstName:'Chris',
        lastName :'Kreider',
        position: 'Left Wing',
        age: 34,
        photo: 'imgs/8th.png',
        hiddenFact: 'He was came into the NHL with the New York Rangers and his first goal was against the Ottawa Senators in a playoff game'
    },
    {
        firstName:'Alexis',
        lastName :'Lafrenière',
        position: 'Left Wing',
        age: 23,
        photo: 'imgs/9th.png',
        hiddenFact: 'Before he played for the Rangers, Lafrenière used to play in the Quebec Major Junior Hockey League'
    },
     {
        firstName:'J.T.',
        lastName :'Miller',
        position: 'Left Wing',
        age: 32,
        photo: 'imgs/10th.png',
        hiddenFact: 'When he was 19 years old he was the first Ranger to have a multigoal game as a teenager since 1992'
    },
     {
        firstName:'Brennan',
        lastName :'Othmann',
        position: 'Left Wing',
        age: 22,
        photo: 'imgs/11th.png',
        hiddenFact: 'His Father and his Uncle both played hockey in Switzerland'
    },
     {
        firstName:'Artemi',
        lastName :'Panarin',
        position: 'Left Wing',
        age: 33,
        photo: 'imgs/12th.png',
        hiddenFact: 'Even though he now plays for the Rangers, he actually scored his first NHL goal against the Rangers playing for the Blackhawks'
    },
     {
        firstName:'Juuso',
        lastName :'Parssinen',
        position: 'Center',
        age: 24,
        photo: 'imgs/13th.png',
        hiddenFact: 'His birthplace is Hameenlinna Finland'
    },
     {
        firstName:'Gabe',
        lastName :'Perreault',
        position: 'Right Wing',
        age: 20,
        photo: 'imgs/14th.png',
        hiddenFact: 'Gabe Perreault played in the Hockey East All-Rookie Team (2024), the Hockey East Second All-Star Team (2024), and in the NCAA (East) Second All-American Team (2024)'
    },
     {
        firstName:'Matt',
        lastName :'Rempe',
        position: 'Center',
        age: 22,
        photo: 'imgs/15th.png',
        hiddenFact: 'He was drafted by the New York Rangers in 2020 in the 6th round of the draft.'
    },
     {
        firstName:'Vincent',
        lastName :'Trocheck',
        position: 'Center',
        age: 31,
        photo: 'imgs/16th.png',
        hiddenFact: 'Trocheck scored his 200th NHL goal as a New York Ranger against the New York Islanders at MSG on November 3rd 2024'
    },
     {
        firstName:'Mika',
        lastName :'Zibanejad',
        position: 'Center',
        age: 32,
        photo: 'imgs/17th.png',
        hiddenFact: 'In 2012 Zibanejad played in the 2012 World Junior Championship for Sweden he scored in overtime and gave Sweden a 1-0 victory against Russia in the final. That championship in 2012 was Sweden first at the World Juniors in 31 years.'
    },




    







    
     {
        firstName:'Will',
        lastName :'Borgen',
        position: 'Defense',
        age: 28,
        photo: 'imgs/18th.png',
        hiddenFact: 'Borgen graduated in 2015 from Moorhead High School in Minnesota, where he was a three-time letterwinner in hockey and soccer.'
    },
     {
        firstName:'Calvin',
        lastName :'Haan',
        position: 'Defense',
        age: 34,
        photo: 'imgs/19th.png',
        hiddenFact: 'He made his NHL debut with the Islanders on December 15th 2011'
    },
     {
        firstName:'Adam',
        lastName :'Fox',
        position: 'Defense',
        age: 27,
        photo: 'imgs/20th.png',
        hiddenFact: 'Grew up a Rangers fan in Jericho, New York'
    },
     {
        firstName:'Zac',
        lastName :'Jones',
        position: 'Defense',
        age: 24,
        photo: 'imgs/21st.png',
        hiddenFact: 'He played for the USHL Second All-Star Team in (2019), the Hockey East All-Rookie Team in (2020), and the NCAA (East) Second All-American Team in (2021)'
    },
     {
        firstName:'K`Andre',
        lastName :'Miller',
        position: 'Defense',
        age: 25,
        photo: 'imgs/22nd.png',
        hiddenFact: 'Scored his first goal in a 3-2 loss to the Buffalo Sabres on January 26th'
    },
     {
        firstName:'Braden',
        lastName :'Schneider',
        position: 'Defense',
        age: 23,
        photo: 'imgs/23rd.png',
        hiddenFact: 'Schneider has represented Canada at the 2018 Hlinka Gretzky Cup (gold medal) and the 2021 IIHF World Junior Championship (silver). '
    },
     {
        firstName:'Carson',
        lastName :'Soucy',
        position: 'Defense',
        age: 30,
        photo: 'imgs/24th.png',
        hiddenFact: 'Soucy made the Wild in 2019-20 and scored his first NHL goal against the Carolina Hurricanes on Nov. 16, 2019.'
    },
 {
        firstName:'Urho',
        lastName :'Vaakanainen',
        position: 'Defense',
        age: 26,
        photo: 'imgs/25th.png',
        hiddenFact: 'He was born in Joensuu Finland'
    },
     {
        firstName:'Jonathan',
        lastName :'Quick',
        position: 'Goalie',
        age: 39,
        photo: 'imgs/26th.png',
        hiddenFact: 'He helped Los Angeles win the Stanley Cup twice.'
    },
     {
        firstName:'Igor',
        lastName :'Shesterkin',
        position: 'Goalie',
        age: 29,
        photo: 'imgs/27th.png',
        hiddenFact: 'He won his NHL debut by making 29 saves in a 5-3 victory against the Colorado Avalanche.'
    }   
]
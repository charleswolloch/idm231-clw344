let zodDateObj = document.getElementById('zodDate');
let showMeObj = document.getElementById('showMe');

function computeZod() {
    let userBday = zodDateObj.value;
    console.log('userBday is ' + userBday);
    let monStr = userBday.substr(5, 2);
    let dayStr = userBday.substr(8, 2);


    let monNum = parseInt(monStr);
    let dayNum = parseInt(dayStr);

    showMeObj.innerHTML = dateToZodiac(monNum, dayNum);
}


function dateToZodiac(whichMonth, whichDayOfMonth) {
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Cap";
        gotSign = "Jon Snow";
        gotZod = "Capricorns are known for being responsible, disciplined people who make great managers but also tend to have a bit of a negative side. They are also very dedicated to their family lives and to doing things exactly right, and they tend to be very traditional and serious. These are all great ways to describe Jon. He is an excellent manager who has shown a decent amount of self-control, he is very responsible and is completely focused on his task at hand. He also has an extremely serious disposition and is known to be kind of a downer sometimes.";
        
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Sag";
        gotSign = "Yigritte";
        gotZod = "What a Sagittarius treasures above all else is that feeling of being totally free, which is all Yigritte has ever wanted and worked for. Sags are also known for their sense of humor, their impatience, and their enthusiasm.";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "Sco";
        gotSign = "Arya Stark";
        gotZod = "A few words that describe Scorpios are mysterious, passionate, stubborn, brave, distrusting, secretive, and violent. What other sign could describe Arya in a better way? She is a woman of mystery and knows how to keep to herself to get exactly what she wants. She is brave to a fault, almost, and has a true violent side. She is never afraid of being assertive or acting like a leader, and at the same time, she can be highly emotional and moody. And, as we've seen, Arya clearly has the Scorpio sexual side as well.";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Lib";
        gotSign = "Bronn of the Blackwater";
        gotZod = "Libras are diplomatic, social people who love to be around other people. They are also inspired by the finer things in life, and love to be surrounded by not only friends, but material possessions that are nice to look at. This is basically Bronn, who is obsessed with money and getting himself all of the riches he can get - it takes over everything else. Bronn is also known to always have a companion by his side, whether it's one of the Lannister brothers or a woman he's found.";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "Vir";
        gotSign = "Brienne of Tarth";
        gotZod = "There may be no other sign that is as loyal, hardworking, and practical as a Virgo is. Virgos are strong people who are detail-oriented and dedicated to being super organized and getting every job they are tasked with done right. This is Brienne in a nutshell. She is incredibly loyal to those she serves and her whole life revolves around getting her work done. She is completely focused on any task at hand and pays attention to every little detail. She is also a practical thinker, and at the same time, she can be self-critical, like a true Virgo.";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "Leo";
        gotSign = "Tyrion Lannister";
        gotZod = "Leos are a sign that love to be the center of attention. They love to be where the action is, they're very sociable, they're loyal and dedicated, and they have some serious passion and drive. Tyrion is someone who always manages to put some sort of spotlight on himself, and he has never shied away from being in some sort of leadership position. Whatever he does, he puts his all into it, and he remains loyal to those he believes deserves his loyalty. And while he may have grown out of it a bit now, Tyrion was always someone who saw himself as a bit of celebrity... like a typical Leo.";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "Can";
        gotSign = "Cersei Lannister";
        gotZod = "Cancers can be challenging, but there is one thing that really makes them stand out, and that's their complete love and devotion to their family. Everything Cersei does, every decision she makes, centers around her total loyalty and devotion to her family members and her children, and that alone makes her a Cancer. But Cancers are also known to be moody, pessimistic, suspicious, and manipulative... so, yes, that is pretty much Cersei explained.";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "Gem";
        gotSign = "Sansa Stark";
        gotZod = "Geminis represent two different personalities, which we have certainly seen from Sansa: she knows how to play the obedient, kind part just as well as she can play the ruthless and manipulative part. Geminis are very adaptable people who can learn quickly — Sansa has been through it all, and has managed to make every one of her situations work in the end. Geminis are also known for being social and quick-witted, two things that certainly describe Lady Stark.";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "Tau";
        gotSign = "Jaime Lannister";
        gotZod = "A Taurus is known for being very loyal, practical, responsible, stubborn, possessive, and romantic. This pretty much describes Jaime. He is incredibly loyal to his family and has proven throughout the series that he is true to his word no matter what, showing off both his stubborn and responsible sides. He is also a practical thinker, for the most part, except when it comes to decisions revolving around Cersei — then he is stubbornly romantic and loving in a very Taurus way.";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "Ari";
        gotSign = "Daenerys Targaryen";
        gotZod = "An Aries stands out because of their unique ability and drive to be the best leaders out there. They are bold, competitive, fearless, passionate people who take on whatever comes their way while managing to come out on top. Daenerys is pretty much a classic Aries. Her desire to be a leader is the main thing anyone notices about her, and she has shown a tremendous amount of strength and courage to get where she is today. Plus: fire sign.";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "Pis";
        gotSign = "Hodor";
        gotZod = "Pisces are probably the most sensitive sign of the zodiac. They are intuitive, gentle, compassionate people who have an artistic side, tend to be fearful, and hate cruelty. Hodor is a kind and generous person who does everything for his friends and other people. He's always willing to help the people he cares for, and anyone in need, and he is easily the most sensitive and compassionate person in the Game of Thrones universe.";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "Aqu";
        gotSign = "Bran Stark";
        gotZod = "Anyone who is an Aquarius is probably known for being more unique than others. Aquarius is typically more eccentric and mythical; they are also very independent, aloof, and don't really show off their emotions. Still, an Aquarius knows how to be a fighter and a good friend, and they're exceptionally smart. They are deep thinkers who enjoy time to themselves and absolutely need to be using their mind all the time. Bran is definitely on the more eccentric side, and he is constantly sitting on his own, thinking and putting his mind to work. He doesn't appear to have any emotions, really, and he has shown that he doesn't need anyone by his side.";
    }

    return gotSign + ' - ' + gotZod;

}

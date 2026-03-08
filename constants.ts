import type { Mood, NonAlcoholicDrink, AlcoholicDrinkCategory } from './types';

export const MOODS: Mood[] = [
  {
    id: 'heal',
    title: 'Sad',
    imageSeed: 'lonely-rain',
    beverages: {
      nonAlcoholic: [
        { name: 'Hot Chocolate', description: 'Like a warm hug in a mug, its rich, creamy sweetness offers a moment of pure, unadulterated comfort to soothe a heavy heart.' },
        { name: 'Peppermint Tea', description: 'A bright, refreshing infusion that can help clear a foggy mind and offer a moment of crisp, clean clarity when things feel overwhelming.' },
        { name: 'Golden Milk (Turmeric Latte)', description: 'This radiant, anti-inflammatory elixir warms you from the inside out, offering a gentle, healing touch when you need it most.' },
        { name: 'Korean Banana Milk', description: 'A sip of childhood nostalgia; this sweet, creamy milk drink provides a simple, gentle lift on a difficult day.' },
        { name: 'Rooibos Tea', description: 'Naturally sweet and caffeine-free with an earthy vanilla note, this red tea is deeply calming and offers a sense of grounding.' },
      ],
      alcoholic: [
        { name: 'Old Fashioned', description: 'A timeless classic for contemplative sipping. Its blend of bitter, sweet, and strong invites you to slow down and find your center.' },
        { name: 'Glass of Malbec', description: 'Deep, dark, and velvety, this red wine offers a rich, sensory experience to get lost in, providing a momentary escape from your thoughts.' },
        { name: 'Hot Toddy', description: 'A soothing concoction of whiskey, honey, and lemon, it\'s the liquid equivalent of a cozy fireplace on a cold, lonely night.' },
        { name: 'Irish Coffee', description: 'A soul-warming mix of hot coffee, Irish whiskey, and sweet cream that gives you a gentle lift and a comforting embrace all at once.' },
        { name: 'Negroni', description: 'Its bold, bittersweet complexity commands your attention, offering a sophisticated distraction and a reminder that there\'s beauty in balance.' },
      ],
      indie: [
        { name: 'Kashmiri Kahwa', description: 'A traditional green tea from Kashmir with saffron and almonds. Its delicate, exotic aroma is a gentle sensory journey away from your worries.' },
        { name: 'Atole (Mexico)', description: 'A warm, thick, masa-based drink, often flavored with cinnamon. It\'s a nourishing, ancient comfort that feels like a hug from history.' },
        { name: 'Champurrado (Mexico)', description: 'A rich, chocolate-based version of Atole. It\'s thicker and more decadent than hot chocolate, offering profound, soul-deep comfort.' },
        { name: 'Anijsmelk (Netherlands)', description: 'Warm milk infused with star anise and sweetened with honey. A simple, soothing bedtime drink to calm a troubled mind.' },
        { name: 'Salep (Turkey)', description: 'A creamy, comforting hot beverage made from orchid tubers with a sprinkle of cinnamon. A uniquely velvety and restorative experience.' },
      ],
    },
  },
  {
    id: 'sleep',
    title: 'Improve Sleep',
    imageSeed: 'person-sleeping-bed',
    beverages: {
      nonAlcoholic: [
        { name: 'Chamomile Tea', description: 'The quintessential bedtime brew, its gentle, apple-like floral notes are a natural lullaby for the nervous system.' },
        { name: 'Warm Milk', description: 'A timeless remedy that coaxes the body into a state of calm, preparing you for a deep and restful slumber.' },
        { name: 'Valerian Root Tea', description: 'Earthy and potent, this herbal infusion is a powerful sedative that helps quiet a racing mind and ease you into sleep.' },
        { name: 'Tart Cherry Juice', description: 'A natural source of melatonin, this tangy juice can help regulate your sleep-wake cycle for a more profound rest.' },
        { name: 'Lavender Latte', description: 'A soothing, caffeine-free latte with a whisper of floral lavender, turning your wind-down routine into a luxurious ritual.' },
      ],
      alcoholic: [
        { name: 'Brandy Milk Punch', description: 'A classic nightcap of brandy, milk, sugar, and nutmeg. It\'s a creamy, gently warming drink that feels both indulgent and sleep-inducing.' },
        { name: 'A small glass of Port', description: 'Rich, sweet, and warming, a small measure of this fortified wine can help you unwind and feel pleasantly drowsy before bed.' },
        { name: 'The Sandman Cocktail', description: 'A simple mix of gin, sweet vermouth, and a dash of absinthe, designed to be a sophisticated, herbal gateway to dreamland.' },
        { name: 'Chamomile-infused Rum Toddy', description: 'Combines the calming power of chamomile with the gentle warmth of dark rum and honey for a doubly effective sleepy-time drink.' },
        { name: 'Bénédictine (neat)', description: 'This complex herbal liqueur has a warming, slightly sweet profile that is perfect for a slow, meditative sip to end the day.' },
      ],
      indie: [
        { name: 'Ashwagandha Moon Milk (India)', description: 'Warm milk infused with the adaptogenic herb ashwagandha and spices to reduce stress and promote deep, restorative sleep.' },
        { name: 'Jujube Tea (Korea)', description: 'A sweet, calming tea made from dried red dates. It’s known in traditional medicine to soothe nerves and aid in sleep.' },
        { name: 'Linden Flower Tea (Europe)', description: 'A fragrant herbal tea with honey-like notes, cherished for centuries as a gentle remedy for anxiety and insomnia.' },
        { name: 'Kava (Pacific Islands)', description: 'A traditional ceremonial drink with sedative properties, it creates a state of deep relaxation without affecting mental clarity.' },
        { name: 'Passionflower Tea (Americas)', description: 'A mild, earthy tea made from the passionflower plant, known to increase GABA in the brain which promotes relaxation.' },
      ],
    },
  },
  {
    id: 'focus',
    title: 'Better Focus',
    imageSeed: 'study-desk-books',
    beverages: {
      nonAlcoholic: [
        { name: 'Filter Coffee', description: 'The classic mental sharpener. A clean, robust cup delivers a caffeine kick that cuts through brain fog and enhances alertness.' },
        { name: 'Matcha Green Tea', description: 'Provides a unique \'calm alertness\' thanks to the combination of caffeine and L-theanine, promoting focus without the jitters.' },
        { name: 'Ginkgo Biloba Tea', description: 'An ancient herbal remedy known to support cognitive function and improve blood flow to the brain, helping you stay sharp.' },
        { name: 'Sparkling Water with Lemon', description: 'The bright citrus scent and crisp bubbles provide a sensory wake-up call, helping to refresh your mind and reset your focus.' },
        { name: 'Chicory \'Coffee\'', description: 'A caffeine-free alternative with a rich, roasted flavor that can help you settle into a focused mindset without stimulants.' },
      ],
      alcoholic: [
        { name: 'Espresso Martini', description: 'For a short-term burst of creative energy, this cocktail combines the kick of espresso with the smoothness of vodka for a sophisticated lift.' },
        { name: 'Gin and Tonic with Rosemary', description: 'The bright botanicals of gin and the herbal aroma of rosemary create a crisp, sensory experience that can help clear the mind for a new task.' },
        { name: 'Americano Cocktail', description: 'A light, effervescent mix of Campari, sweet vermouth, and soda water. Its bittersweet profile is a refined palate cleanser for the mind.' },
        { name: 'A glass of crisp Sauvignon Blanc', description: 'Its bright acidity and citrus notes can be incredibly refreshing, offering a mental reset during a creative brainstorming session.' },
        { name: 'Michelada', description: 'A zesty, spicy beer cocktail that awakens the palate and senses, providing a sharp jolt of flavor to cut through monotony.' },
      ],
      indie: [
        { name: 'Indian Filter Coffee (South India)', description: 'Strong, frothy, and served in a traditional dabarah, this decoction coffee is a ritual designed to awaken the mind and fuel a productive day.' },
        { name: 'Yerba Mate (South America)', description: 'This South American infusion offers a sustained energy boost that\'s smoother than coffee, celebrated for enhancing mental clarity and stamina.' },
        { name: 'Guayusa Tea (Ecuador)', description: 'A cousin to Yerba Mate, this Amazonian leaf provides clean, focused energy without bitterness, and is packed with antioxidants.' },
        { name: 'Butter Tea (Tibet)', description: 'A savory, high-energy beverage made from tea, yak butter, and salt. It provides sustained fuel for mental and physical endurance.' },
        { name: 'Ceremonial Cacao', description: 'Pure, unsweetened cacao provides a gentle stimulant effect from theobromine, enhancing mood and focus without the intensity of coffee.' },
      ],
    },
  },
  {
    id: 'moment',
    title: 'Enjoying the Moment',
    imageSeed: 'rooftop-cafe-sunset',
    beverages: {
      nonAlcoholic: [
        { name: 'Strawberry Smoothie', description: 'A sweet, creamy, and vibrant treat that tastes like pure, unadulterated happiness and sunshine.' },
        { name: 'Virgin Mojito', description: 'All the festive, refreshing flavor of the classic without the alcohol. The zesty lime and fresh mint are an instant mood-lifter.' },
        { name: 'Italian Soda', description: 'Bubbly, colorful, and customizable with your favorite fruit syrup, it\'s a playful and sophisticated way to toast a happy moment.' },
        { name: 'Affogato', description: 'A scoop of vanilla gelato \'drowned\' in a shot of hot espresso. It\'s a simple, decadent dessert-drink that demands to be savored.' },
        { name: 'Freshly Squeezed Orange Juice', description: 'There’s nothing like the bright, zesty taste of fresh orange juice to make an ordinary moment feel special and full of life.' },
      ],
      alcoholic: [
        { name: 'Margarita', description: 'A fun, zesty, and iconic cocktail that signals good times. Its perfect balance of sweet, sour, and salty is pure liquid joy.' },
        { name: 'Pimm\'s Cup', description: 'A delightfully refreshing and quintessentially British cocktail loaded with fruit. It’s like a garden party in a glass.' },
        { name: 'Craft IPA', description: 'For the beer lover, the bold, hoppy, and complex flavors of a great IPA are an experience to be explored and savored.' },
        { name: 'Piña Colada', description: 'The ultimate tropical escape. The creamy blend of rum, coconut, and pineapple is instant bliss and pure, unadulterated fun.' },
        { name: 'Sangria', description: 'A festive, fruit-filled wine punch that\'s made for sharing. It\'s relaxed, sociable, and perfect for a sunny afternoon with friends.' },
      ],
      indie: [
        { name: 'Mango Lassi (India)', description: 'A thick, creamy, and indulgent yogurt drink that tastes like the essence of summer. It\'s a sweet, joyful treat.' },
        { name: 'Caipirinha (Brazil)', description: 'Brazil\'s national cocktail, made with cachaça, sugar, and lime. It\'s simple, potent, and embodies a vibrant, carefree spirit.' },
        { name: 'Sake Bomb (Japan/USA)', description: 'A playful, energetic ritual where a shot of sake is dropped into a beer. It\'s less about savoring and more about a burst of communal fun.' },
        { name: 'Glühwein (Germany)', description: 'A warm, spiced mulled wine enjoyed during winter markets. It creates a cozy, festive atmosphere that makes you appreciate the moment.' },
        { name: 'Tepache (Mexico)', description: 'A lightly alcoholic, fermented pineapple drink. It’s fizzy, tangy, and incredibly refreshing—a true taste of rustic celebration.' },
      ],
    },
  },
  {
    id: 'chill',
    title: 'Chill',
    imageSeed: 'friends-laughing-party',
    beverages: {
      nonAlcoholic: [
        { name: 'Iced Green Tea with Mint', description: 'A supremely refreshing and cooling drink that hydrates and calms, perfect for a slow, relaxed afternoon.' },
        { name: 'Cucumber-Infused Water', description: 'Simple, elegant, and spa-like. It’s the essence of cool, calm hydration that helps you reset and unwind.' },
        { name: 'Kombucha', description: 'This fermented tea offers a gentle effervescence and complex flavor, making it a satisfying and gut-friendly choice for a mindful pause.' },
        { name: 'Cold Brew Coffee', description: 'Smooth, low-acid, and less intense than its hot-brewed cousin, it provides a mellow caffeine lift for a laid-back vibe.' },
        { name: 'Fresh Lemonade', description: 'The perfect balance of sweet and tart, a classic lemonade is a simple pleasure that signals a break from the day\'s hustle.' },
      ],
      alcoholic: [
        { name: 'Aperol Spritz', description: 'Effervescent, brightly colored, and pleasantly bittersweet. It’s the ultimate golden-hour drink that practically screams \'relax\'.' },
        { name: 'Gin and Tonic', description: 'A crisp, botanical, and endlessly refreshing classic. The perfect no-fuss cocktail to sip while you let the day\'s stress dissolve.' },
        { name: 'Light Lager', description: 'Clean, uncomplicated, and easy-drinking. A cold bottle of lager is a reliable go-to for kicking back and doing absolutely nothing.' },
        { name: 'Mojito', description: 'A vibrant mix of rum, mint, and lime that tastes like a mini-vacation in a glass, instantly transporting you to a more relaxed state.' },
        { name: 'Rosé Wine', description: 'Light, crisp, and beautiful to look at, a chilled glass of rosé is synonymous with leisurely afternoons and good conversation.' },
      ],
      indie: [
        { name: 'Nimbu Paani (India)', description: 'India’s answer to lemonade, often with a hint of salt and cumin. It\'s an incredibly refreshing and electrolyte-replenishing cooler.' },
        { name: 'Horchata (Spain/Latin America)', description: 'A creamy, refreshing drink made from rice or almonds, spiced with cinnamon. It\'s smooth, sweet, and deeply soothing.' },
        { name: 'Ayran (Turkey)', description: 'A savory, salty yogurt drink that is incredibly cooling and rehydrating on a hot day. A staple for a reason.' },
        { name: 'Bissap (Senegal)', description: 'A vibrant hibiscus iced tea, often infused with mint or ginger. Its tart, floral notes are wonderfully refreshing and calming.' },
        { name: 'Agua Fresca (Mexico)', description: 'Literally \'fresh water,\' this is a light, non-alcoholic drink made from fruits, flowers, or seeds blended with water and sugar.' },
      ],
    },
  },
  {
    id: 'celebration',
    title: 'Celebration',
    imageSeed: 'vodka-glasses-cheers',
    beverages: {
      nonAlcoholic: [
        { name: 'Sparkling Apple Cider', description: 'Bubbly, crisp, and festive, this non-alcoholic classic allows everyone to join in on the toast with a satisfying \'pop\'.' },
        { name: 'Shirley Temple', description: 'A sweet, bubbly, and nostalgic mocktail with a cherry on top. It’s a fun and festive treat for all ages.' },
        { name: 'Pomegranate Spritzer', description: 'A sophisticated mix of tart pomegranate juice and sparkling water with a lime garnish. It looks and feels as special as a cocktail.' },
        { name: 'Roy Rogers', description: 'The classic cola and grenadine mocktail, a simple yet satisfyingly festive drink for any celebratory occasion.' },
        { name: 'Virgin Piña Colada', description: 'All the tropical, creamy delight of the original, this mocktail makes any gathering feel like a special island getaway.' },
      ],
      alcoholic: [
        { name: 'Champagne/Prosecco', description: 'The quintessential drink of celebration. The sound of a popping cork and the sight of rising bubbles instantly elevates any occasion.' },
        { name: 'French 75', description: 'A sophisticated and effervescent cocktail of gin, Champagne, and lemon. It\'s pure elegance and festive spirit in a flute.' },
        { name: 'Vodka Martini', description: 'A timeless symbol of style and occasion. Whether shaken or stirred, this clean, strong cocktail is perfect for marking a milestone.' },
        { name: 'Manhattan', description: 'A classic, robust cocktail made with whiskey, sweet vermouth, and bitters. It\'s a dignified and flavorful way to toast to success.' },
        { name: 'Bellini', description: 'A delightful mix of Prosecco and peach purée. It\'s a light, fruity, and elegant cocktail perfect for brunch celebrations or special toasts.' },
      ],
      indie: [
        { name: 'Sula Wine (India)', description: 'Raise a glass of wine from India\'s Nashik valley. Celebrating with a local vintage adds a unique and worldly touch to your special moment.' },
        { name: 'Scotch Whisky (Single Malt)', description: 'A fine single malt is for savoring achievements. Its complex character is a reward in itself, meant to be enjoyed slowly.' },
        { name: 'Ouzo (Greece)', description: 'An anise-flavored aperitif that is synonymous with Greek hospitality and celebration. Usually served with mezedes and good company.' },
        { name: 'Pisco Sour (Peru/Chile)', description: 'A tangy, frothy, and unique cocktail made with pisco brandy. Its vibrant flavor is perfect for a lively and memorable celebration.' },
        { name: 'Toddy (Palm Wine)', description: 'A mildly alcoholic, fermented sap from palm trees. In many regions, it\'s the traditional go-to beverage for local festivals and gatherings.' },
      ],
    },
  },
];

export const INDIE_DRINKS: NonAlcoholicDrink[] = [
    { name: 'Mango Lassi', description: 'A creamy blend of ripe mangoes and yogurt, often spiced with cardamom – a hydrating, vitamin-rich summer drink.' },
    { name: 'Masala Chai', description: 'Traditional Indian spiced tea made with black tea, milk, and warming spices like cardamom and ginger.' },
    { name: 'Sweet Lassi', description: 'A sweet and creamy yogurt-based drink, perfect for cooling down and aiding digestion.' },
    { name: 'Buttermilk (Chaas)', description: 'A savory, spiced yogurt drink that is light, refreshing, and great for gut health.' },
    { name: 'Aam Panna', description: 'A tangy and sweet cooler made from raw green mangoes, known for preventing heat stroke.' },
    { name: 'Nimbu Paani', description: 'Indian-style lemonade, often with salt, sugar, and spices, excellent for rehydration.' },
    { name: 'Jaljeera', description: 'A tangy and spicy drink made with cumin, mint, and other spices, often served as an appetizer.' },
    { name: 'Thandai', description: 'A cold, rich drink made with nuts, seeds, and spices, traditionally consumed during festivals.' },
    { name: 'Rooh Afza Sharbat', description: 'A sweet, floral, and herbal concentrate mixed with water or milk, famous for its cooling properties.' },
    { name: 'Rose Milk (Gulab Doodh)', description: 'Chilled milk flavored with rose syrup, offering a fragrant and soothing experience.' },
    { name: 'Kanji', description: 'A fermented probiotic drink made from black carrots, with a tangy and savory taste.' },
    { name: 'Coconut Water', description: 'A natural, hydrating beverage rich in electrolytes, straight from the tender coconut.' },
    { name: 'Indian Filter Coffee', description: 'A strong, frothy, milky coffee made with a special metal filter, popular in South India.' },
    { name: 'Tulsi Kadha', description: 'An herbal tea made from holy basil, ginger, and other herbs, known for its immunity-boosting properties.' },
    { name: 'Sugarcane Juice', description: 'A sweet and refreshing juice extracted from sugarcane stalks, often with ginger and lime.' },
    { name: 'Kokum Sharbat', description: 'A sweet and tangy drink made from the kokum fruit, known for its cooling and digestive benefits.' },
    { name: 'Solkadhi', description: 'A soothing pink-colored drink from the Konkan region, made with coconut milk and kokum.' },
    { name: 'Badam Milk', description: 'Warm or cold milk enriched with ground almonds, saffron, and cardamom.' },
    { name: 'Bel Sharbat', description: 'A cooling drink made from the pulp of the wood apple, great for digestion and summer heat.' },
    { name: 'Phalsa Sharbat', description: 'A sweet and sour cooler made from the small, berry-like phalsa fruit.' },
];

export const NON_ALCOHOLIC_DRINKS: NonAlcoholicDrink[] = [
    { name: 'Green Tea', description: 'A light, antioxidant-rich tea known for its numerous health benefits, including boosting metabolism.' },
    { name: 'Black Tea', description: 'A robust, fully oxidized tea that can be enjoyed plain or with milk and sugar.' },
    { name: 'Oolong Tea', description: 'A traditional Chinese tea with a flavor profile between green and black tea.' },
    { name: 'White Tea', description: 'The least processed type of tea, with a delicate and subtle flavor.' },
    { name: 'Chamomile Tea', description: 'A caffeine-free herbal tea renowned for its calming and sleep-promoting effects.' },
    { name: 'Peppermint Tea', description: 'A refreshing herbal tea that can aid digestion and soothe an upset stomach.' },
    { name: 'Ginger Tea', description: 'A zesty and warming tea made from fresh ginger, known for its anti-inflammatory properties.' },
    { name: 'Hibiscus Tea', description: 'A tart and colorful herbal tea packed with antioxidants, served hot or cold.' },
    { name: 'Espresso', description: 'A concentrated coffee beverage brewed by forcing hot water through finely-ground coffee beans.' },
    { name: 'Americano', description: 'A coffee drink prepared by diluting an espresso with hot water.' },
    { name: 'Latte', description: 'A coffee drink made with espresso and steamed milk, topped with a light layer of foam.' },
    { name: 'Cappuccino', description: 'An espresso-based coffee drink with steamed milk foam, known for its thick, airy topping.' },
    { name: 'Matcha Latte', description: 'A creamy beverage made from finely ground green tea powder (matcha) and steamed milk.' },
    { name: 'Hot Chocolate', description: 'A sweet, warm beverage made from melted chocolate or cocoa powder and milk.' },
    { name: 'Orange Juice', description: 'A classic, refreshing juice packed with Vitamin C.' },
    { name: 'Apple Juice', description: 'A sweet and mild juice enjoyed by all ages.' },
    { name: 'Grape Juice', description: 'A sweet juice made from crushed grapes, rich in antioxidants.' },
    { name: 'Pineapple Juice', description: 'A tropical juice with a sweet and tart flavor profile.' },
    { name: 'Watermelon Juice', description: 'An incredibly hydrating and refreshing juice, perfect for hot weather.' },
    { name: 'Pomegranate Juice', description: 'A tart and flavorful juice known for its high antioxidant content.' },
    { name: 'Strawberry Smoothie', description: 'A creamy and sweet smoothie made with fresh strawberries, yogurt, and milk.' },
    { name: 'Banana Smoothie', description: 'A thick, naturally sweet smoothie that provides a quick energy boost.' },
    { name: 'Green Smoothie', description: 'A nutrient-dense smoothie made with leafy greens like spinach or kale, fruits, and a liquid base.' },
    { name: 'Mixed Berry Smoothie', description: 'A vibrant and antioxidant-rich smoothie with a mix of berries like blueberries and raspberries.' },
    { name: 'Cola', description: 'A carbonated soft drink flavored with vanilla, cinnamon, citrus oils and other flavorings.' },
    { name: 'Lemon-Lime Soda', description: 'A crisp and refreshing carbonated beverage with citrus flavors.' },
    { name: 'Ginger Ale', description: 'A carbonated soft drink flavored with ginger, often used to soothe stomach upset.' },
    { name: 'Tonic Water', description: 'A carbonated soft drink in which quinine is dissolved, giving it a bitter taste.' },
    { name: 'Sparkling Water', description: 'Water into which carbon dioxide gas under pressure has been dissolved.' },
    { name: 'Kombucha', description: 'A fermented, lightly effervescent, sweetened black or green tea drink with probiotic benefits.' }
];

export const ALCOHOLIC_DRINKS: AlcoholicDrinkCategory[] = [
  {
    name: 'Welcome to the World of Drinks',
    description: 'Enjoying a glass of wine or a mixed drink can uplift mood in the short term, but it’s important to drink responsibly. Common alcoholic beverages like beer, wine, and spirits are enjoyed in moderation across many cultures. Historically, some cultures even used fermented drinks as medicine or for ritual libations. This section provides a guide to responsible enjoyment.',
    serving: '',
    dosage: '',
    dos: [],
    donts: []
  },
  {
    name: 'Beer',
    description: 'One of the oldest and most widely consumed alcoholic drinks in the world, beer is brewed from cereal grains—most commonly from malted barley, though wheat, maize, and rice are also used.',
    serving: 'Best served chilled in a glass appropriate for the style (e.g., pint glass, mug, pilsner glass).',
    dosage: 'A standard drink is typically a 12 oz (355 ml) can or bottle of regular-strength beer (around 5% ABV).',
    dos: ['Try pairing different beer styles with food.', 'Serve in a clean glass to appreciate the aroma and head.'],
    donts: ['Don\'t drink directly from a frosty mug, as it can kill the carbonation and flavor.', 'Don\'t overfill the glass; leave room for the head.']
  },
  {
    name: 'Wine',
    description: 'An alcoholic drink typically made from fermented grapes. Different varieties of grapes and strains of yeasts produce different styles of wine.',
    serving: 'Serve red wine at cool room temperature (15-18°C) and white wine chilled (8-12°C). Use wine glasses with a stem to avoid warming the wine with your hands.',
    dosage: 'A standard drink is a 5 oz (150 ml) glass of wine (around 12% ABV).',
    dos: ['Allow red wine to "breathe" after opening.', 'Hold the glass by the stem.'],
    donts: ['Don\'t store wine in a place with fluctuating temperatures or direct sunlight.', 'Don\'t fill the glass to the brim.']
  },
  {
    name: 'Whiskey/Whisky',
    description: 'A type of distilled alcoholic beverage made from fermented grain mash. Various grains (which may be malted) are used for different varieties, including barley, corn, rye, and wheat.',
    serving: 'Can be enjoyed neat, with a splash of water, or on the rocks in a short tumbler. Also a base for many classic cocktails.',
    dosage: 'A standard drink is a 1.5 oz (44 ml) shot of 80-proof (40% ABV) spirits.',
    dos: ['Take small sips to appreciate the complex flavors.', 'Add a few drops of water to open up the aromas.'],
    donts: ['Don\'t feel pressured to drink it neat if you don\'t enjoy it.', 'Don\'t mix a high-quality single malt with a sugary soda.']
  },
  {
    name: 'Vodka',
    description: 'A distilled beverage composed primarily of water and ethanol, sometimes with traces of impurities and flavorings. Traditionally it is made by distilling the liquid from cereal grains or potatoes that have been fermented.',
    serving: 'Often served chilled and neat, or as a base in countless cocktails like the Martini, Cosmopolitan, and Moscow Mule.',
    dosage: 'A standard drink is a 1.5 oz (44 ml) shot of 80-proof (40% ABV) spirits.',
    dos: ['Keep a bottle in the freezer for crisp, clean shots.', 'Use high-quality mixers to complement the spirit.'],
    donts: ['Don\'t assume all vodkas taste the same; there are subtle differences.', 'Don\'t overpower it with low-quality, sugary juice.']
  },
  {
    name: 'Gin',
    description: 'A distilled alcoholic drink that derives its predominant flavour from juniper berries. It has a distinct herbal and botanical character.',
    serving: 'Most famously used in a Gin and Tonic, served over ice in a highball or copa glass with a lime or lemon wedge. Also key in a classic Martini.',
    dosage: 'A standard drink is a 1.5 oz (44 ml) shot of 80-proof (40% ABV) spirits.',
    dos: ['Experiment with different garnishes like cucumber, rosemary, or grapefruit.', 'Choose a quality tonic water to let the gin shine.'],
    donts: ['Don\'t use old or flat tonic water.', 'Don\'t be afraid to try modern gins with unique botanical profiles.']
  },
  {
    name: 'Rum',
    description: 'A distilled alcoholic drink made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation.',
    serving: 'Light rums are common in cocktails like the Mojito and Daiquiri. Dark rums are often enjoyed neat or on the rocks, like whiskey.',
    dosage: 'A standard drink is a 1.5 oz (44 ml) shot of 80-proof (40% ABV) spirits.',
    dos: ['Pair aged rums with a single large ice cube.', 'Use fresh lime juice in rum cocktails.'],
    donts: ['Don\'t limit yourself to just spiced rum; explore aged and white rums.', 'Don\'t mix an expensive aged rum with cola.']
  },
  {
    name: 'Traditional Indian Spirits',
    description: 'India has a rich history of local and traditional alcoholic beverages, which vary by region and ingredients.',
    serving: 'Feni (from Goa, made of cashew or coconut) is often served with a slice of lime and a slit green chili. Toddy (palm wine) is usually served fresh and naturally carbonated.',
    dosage: 'Strengths vary widely. Consume in moderation and be aware of local customs.',
    dos: ['Try these spirits with local cuisine for an authentic experience.', 'Ask locals for recommendations on how to best enjoy them.'],
    donts: ['Be cautious, as some local brews can be very strong.', 'Ensure you are purchasing from a reputable source.'],
  },
];

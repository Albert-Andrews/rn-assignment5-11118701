rn-assignment5-YourID

Mobile Application Development Assignment 5

This project is a mobile application developed as part of the DCIT202 Mobile Application Development course. The application recreates a provided UI mockup and includes features such as bottom tab navigation and theme switching between light and dark modes.

Features
Recreated design as per the provided UI mockup.
Implemented bottom tab navigation with Home and Settings screens.
Added a feature to switch between light and dark themes.
Styled the application to closely match the provided UI design.
Utilized custom components throughout the application for better code reusability and readability.
Screenshots
![alt text](<Screenshot 2024-06-26 at 10.28.23 PM.png>)
![alt text](<Screenshot 2024-06-26 at 10.28.35 PM.png>)
![alt text](<Screenshot 2024-06-26 at 10.43.45 PM.png>)
![alt text](<Screenshot 2024-06-26 at 10.43.55 PM.png>)

How to Run the Application
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/rn-assignment5-YourID.git
cd rn-assignment5-YourID
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
Run on an emulator or physical device:

Follow the on-screen instructions to run the app on an Android or iOS device/emulator.

Implementation Details
UI Design Recreation:

The application closely follows the provided UI design, ensuring that elements such as profile display, transaction list, and transfer options are accurately represented.

Bottom Tab Navigation:

The application uses React Navigation to implement a bottom tab navigator, with separate screens for Home and Settings.

Theme Switching:

Users can switch between light and dark themes from the Settings screen. The theme state is managed using React Context, ensuring the selected theme is applied globally across the application.

Example of Theme Implementation

Here's a snippet showing how the theme switching is implemented using React Context:

javascript
Copy code
// ThemeContext.js
import React, { createContext, useState } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
const colorScheme = useColorScheme();
const [theme, setTheme] = useState(colorScheme);

const toggleTheme = () => {
setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
};

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
};

export { ThemeContext, ThemeProvider };
javascript
Copy code
// App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Settings from './screens/Settings';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

const Tab = createBottomTabNavigator();

const App = () => {
return (
<ThemeProvider>
<Navigation />
</ThemeProvider>
);
};

const Navigation = () => {
const { theme } = useContext(ThemeContext);
return (
<NavigationContainer theme={theme === 'light' ? LightTheme : DarkTheme}>
<Tab.Navigator>
<Tab.Screen name="Home" component={Home} />
<Tab.Screen name="Settings" component={Settings} />
</Tab.Navigator>
</NavigationContainer>
);
};

const LightTheme = {
dark: false,
colors: {
primary: 'white',
background: 'white',
card: 'white',
text: 'black',
border: 'gray',
notification: 'gray',
},
};

const DarkTheme = {
dark: true,
colors: {
primary: 'black',
background: 'black',
card: 'black',
text: 'white',
border: 'gray',
notification: 'gray',
},
};

export default App;
Custom Components:

The app leverages custom components to enhance code modularity and reusability. Examples include custom card components for transactions and a theme switch component.

Directory Structure
plaintext
Copy code
.
├── assets
│ ├── icons
│ ├── images
│ └── ... (other assets)
├── components
│ ├── TransactionCard.js
│ ├── ThemeSwitch.js
│ └── ... (other components)
├── context
│ └── ThemeContext.js
├── screens
│ ├── Home.js
│ ├── Settings.js
│ └── ... (other screens)
├── App.js
├── package.json
└── README.md
Resources
UI Design: [Link to UI Design](URL to UI Design)
Application Resources: [Google Drive Link](URL to Google Drive)
Development Process
Each task was committed separately to ensure a clear history of the development process. The commits were structured as follows:

Initial setup and project structure.
Implementation of the Home screen UI.
Implementation of the Settings screen UI.
Addition of bottom tab navigation.
Implementation of theme switching feature.
Final styling adjustments to match the UI design.
Author
Albert Andrews Awuley Quaye
11118701
aaaquaye001@st.ug.edu.gh
License
This project is licensed under the MIT License - see the LICENSE file for details.

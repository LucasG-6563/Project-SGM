import React from "react";
import { BottomNavigation } from "react-native-paper";
import NotaScreen from "../view/notaScreen";
import FaltaScreen from "../view/faltaScreen";

MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'notas', title: 'Notas', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
        {key: 'faltas', title: 'Faltas', focusedIcon: 'album'}
    ]);

    const renderScene = BottomNavigation.SceneMap({
        notas: NotaScreen,
        faltas: FaltaScreen
    });

    return (
        <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        />
    );
};

export default MyComponent;
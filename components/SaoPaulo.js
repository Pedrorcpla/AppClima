import React,{useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import api from './Api';

export default function SaoPaulo({navigation}) {

    const [data, setData] = useState(null);

    useEffect(()=>{
        (async () => {
            var inputCity = "Sao Paulo";
            const response = await api.get('weather?array_limit=10&fields=only_results,temp,city_name,date,time,forecast,max,min,description,date&key=ca794d81&city_name='+inputCity);

            setData(response.data.forecast);
        })();
    },[]);

    return (
        <>
            <View style={styles.bloco}>
                <FlatList
                    data={data}
                    renderItem={({item}) => 
                    (
                        <View style={styles.resultadosBusca}>
                            <Text style={styles.texto}>Data: {item.date}</Text>
                            <Text style={styles.texto}>Previsão: {item.description}</Text>
                            <Text style={styles.texto}>Máx: {item.max}</Text>
                            <Text style={styles.texto}>Min: {item.min}</Text>
                        </View>
                    )}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    bloco:{ 
        padding: '3%'
    },
    resultadosBusca:{
        height: 150,
        marginVertical: '2%',
        borderRadius: 20,


        flexDirection: 'column',
        justifyContent: 'space-around',

        backgroundColor: '#7f79e9',
        padding: '5%'
    },
    texto: {
        fontSize: 18,
        color: "white",
    }
});

import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  KeyboardAvoidingView, 
  FlatList, 
  SectionList, 
  VirtualizedList, 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';

// Cores do projeto
const COLORS = {
  background: '#F5F5F5',
  primary: '#6200EE',
  secondary: '#03DAC6',
  text: '#333333',
  header: '#6200EE',
  itemBackground: '#FFFFFF',
  sectionHeaderBackground: '#EEEEEE',
};

// Tipos para lista
type Item = {
  id: string;
  item: string;
};

type SectionItem = {
  title: string;
  data: string[];
};

const App = () => {
  // Lista de compras
  const shoppingList: Item[] = [
    { id: '1', item: 'Arroz' },
    { id: '2', item: 'Feijão' },
    { id: '3', item: 'Macarrão' },
    { id: '4', item: 'Detergente' },
  ];

  const sections: SectionItem[] = [
    { title: 'Supermercado', data: ['Arroz', 'Feijão', 'Açúcar'] },
    { title: 'Limpeza', data: ['Detergente', 'Sabão em pó'] },
  ];

  const getItem = (_data: any, index: number) => ({
    id: String(index),
    title: `Item ${index + 1}`,
  });

  const getItemCount = () => 50;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="height">
          {/* Texto Hello World */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Hello World!</Text>
          </View>

          {/* FlatList - Lista de Compras */}
          <Text style={styles.title}>FlatList - Compras</Text>
          <FlatList
            data={shoppingList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.item}</Text>
              </View>
            )}
          />

          {/* SectionList - Seções de Compras */}
          <Text style={styles.title}>SectionList - Seções</Text>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{title}</Text>
              </View>
            )}
          />

          {/* VirtualizedList */}
          <Text style={styles.title}>VirtualizedList - Itens</Text>
          <VirtualizedList
            data={[]}
            initialNumToRender={4}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            getItemCount={getItemCount}
            getItem={getItem}
          />

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// Estilos com cores
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginVertical: 12,
  },
  itemContainer: {
    backgroundColor: COLORS.itemBackground,
    padding: 12,
    borderRadius: 8,
    marginVertical: 4,
    elevation: 1, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  itemText: {
    color: COLORS.text,
    fontSize: 16,
  },
  sectionHeader: {
    backgroundColor: COLORS.sectionHeaderBackground,
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  sectionHeaderText: {
    color: COLORS.header,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;

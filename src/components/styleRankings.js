import {StyleSheet} from 'react-native';

const ranking = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0ECFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  userRanking: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    marginTop: 10,
  },
  text: {
    color: '#16DAD8',
    fontSize: 25,
  },
  userScorePosition: {
    backgroundColor: '#6D8BA6',
    borderRadius: 100,
    width: 100,
    height: 100,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textScorePosition: {
    color: '#171F26',
    fontSize: 40,
  },
  userScore: {
    color: '#16DAD8',
    fontSize: 25,
    marginLeft: 50,
    marginBottom: 60,
  },
  item: {
    backgroundColor: '#1CA6A6',
    height: 70,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
  },
  list: {
    width: '90%',
    height: 100,
    marginHorizontal: 20,
    borderColor: 'blue',
    marginLeft: 5,
  },
  userPosition: {
    width: '15%',
    height: 80,
    backgroundColor: '#6D8BA6',
    borderRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginLeft: -28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  position: {
    fontSize: 20,
    color: '#171F26',
  },
  title: {
    fontSize: 20,
    color: '#171F26',
  },
  userScoreList: {
    width: '25%',
    height: 80,
    backgroundColor: '#6D8BA6',
    borderRadius: 8,
    marginRight: -28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 20,
    color: '#171F26',
  },
});
export default ranking;

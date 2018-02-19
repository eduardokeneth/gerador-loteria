import { StyleSheet } from 'react-native';

const colorDefault1 = '#00923f';
const colorDefault2 = '#fff';
const colorBorder = '#eeeeee';
const colorDotsArrows = 'rgba(102, 102, 102, 0.7)';

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  headerTitle: {
    color: colorDotsArrows,
    fontSize: 17,
    fontWeight: 'bold',
  },
  headerMegaBg: {
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  numberHeaderMega: {
    color: colorDefault2,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nameGame: {
    color: colorDefault2,
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  tabName: {
    backgroundColor: colorDefault2,
    width: 25,
    height: 2,
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  content1: {
    borderBottomColor: colorBorder,
    borderBottomWidth: 1,
    paddingBottom: 3,
  },
  boxContent1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  textBoxContent1: {
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 8,
  },
  contentCircle: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: colorDefault1,
  },
  boxContent2: {
    paddingVertical: 10,
  },
  content2Title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  content2Subtitle: {
    fontSize: 12,
  },
  content2Numbers: {
    backgroundColor: colorDefault1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAcumulado: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPremio: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  content2NText: {
    color: colorDefault2,
    fontSize: 16,
    textAlign: 'center',
  },
  boxContent2_3: {
    marginTop: 10,
  },
  content2_3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
  },
  content2Title2: {
    fontWeight: 'bold',
    paddingRight: 5,
  },
  textDefault: {
    fontSize: 12,
  },
  boxButtonGerar: {
    paddingVertical: 10,
  },
  buttonGerar: {
    backgroundColor: colorDefault1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 4,
  },
  textButtonGerar: {
    color: colorDefault2,
    fontWeight: 'bold',
  },
  dots: {
    backgroundColor: colorDotsArrows,
    width: 6,
    height: 6,
    borderRadius: 6,
    marginLeft: 3,
    marginRight: 3,
  },
  dotsActive: {
    backgroundColor: colorDotsArrows,
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
  arrowRight: {
    color: colorDotsArrows,
    fontSize: 30,
  },
  arrowLeft: {
    color: colorDotsArrows,
    fontSize: 32,
  },
});

export default styles;

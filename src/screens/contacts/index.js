import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

import Header from '../../components/Header';

import Imageg from '../../assets/images/img4.png';
import OrganizationIcon from '../../assets/images/icon/building.png';
import ScannerIcon from '../../assets/images/icon/scanner.png';
import GlobeIcon from '../../assets/images/icon/globe.png';
import DisciplineIcon from '../../assets/images/icon/discipline.png';
import DownArrowIcon from '../../assets/images/icon/down_arrow.png';

const Contacts = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image source={Imageg} style={styles.image} resizeMode="contain" />
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Contact</Text>
        <View>
          <View style={styles.formField}>
            <Image source={OrganizationIcon} style={styles.icon} />
            <View>
              <Text style={styles.textTitle}>Organisation Name:</Text>
              <Text style={styles.text}>
                Pomo Digital Construction Pvt. LTD
              </Text>
            </View>
          </View>
          <View style={styles.formField}>
            <Image source={ScannerIcon} style={styles.icon} />
            <View>
              <Text style={styles.textTitle}>Abbreviation code:</Text>
              <Text style={styles.text}>2009-1-PL1-LEO05-05016</Text>
            </View>
          </View>
          <View style={styles.formField}>
            <Image source={GlobeIcon} style={styles.icon} />
            <View>
              <Text style={styles.textTitle}>Website:</Text>
              <Text style={styles.text}>www.pomodigital.com</Text>
            </View>
          </View>

          <View style={styles.formField}>
            <Image source={DisciplineIcon} style={styles.icon} />
            <View style={styles.discipline}>
              <Text style={styles.textTitle}>Discipline:</Text>
              <TouchableOpacity>
                <Image source={DownArrowIcon} resizeMode="stretch" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Contacts;

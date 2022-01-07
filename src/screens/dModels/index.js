import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../components/Header';
import styles from './style';

import ConstructionImage from '../../assets/images/cnstruction.png';
import PlusIcon from '../../assets/images/icon/plusIcon.png';
import MinusIcon from '../../assets/images/icon/minusIcon.png';
import DotIcon from '../../assets/images/icon/dot.png';
import SelectIcon from '../../assets/images/icon/select.png';

const Models = () => {
  const {
    container,
    header,
    imageContainer,
    image,
    iconContainer,
    leftSideIcons,
    plusMinusIcons,
    iconStyle,
    plusIcon,
    minusIcon,
    marginTop,
    selectIcon,
    rightSideIcons,
    dotIcon,
  } = styles;
  return (
    <View style={container}>
      <View style={header}>
        <Header />
      </View>
      <View style={imageContainer}>
        <Image source={ConstructionImage} style={image} />
        <View style={iconContainer}>
          <View style={leftSideIcons}>
            <View style={[plusMinusIcons, iconStyle]}>
              <Image source={PlusIcon} style={plusIcon} />
              <Image source={MinusIcon} style={[minusIcon]} />
            </View>
            <View style={[iconStyle]}>
              <Image source={SelectIcon} style={selectIcon} />
            </View>
          </View>
          <View style={[rightSideIcons]}>
            <Image source={DotIcon} style={[dotIcon]} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Models;

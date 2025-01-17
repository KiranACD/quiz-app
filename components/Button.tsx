import { ActivityIndicator, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, useWindowDimensions, View, ViewStyle } from 'react-native'
import React from 'react'
import { TouchableOpacityProps } from 'react-native-gesture-handler';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

interface CustomButtonProps extends Omit<TouchableOpacityProps, 'onPress'> {
    /**
   * Function to be called when the button is pressed
   */
    onPress: () => void;

    /**
   * Text to display inside the button
   */
    title: string;

    /**
   * Whether the button is in a loading state
   * @default false
   */
    loading?: boolean;

    /**
   * Whether the button is disabled
   * @default false
   */
    disabled?: boolean;

    /**
   * The visual variant of the button
   * @default 'primary'
   */
    variant?: ButtonVariant;

    /**
   * Flex value for the button container
   * @default 1
   */
    flex?: number;

    /**
   * Icon component to display on the left side of the text
   */
    leftIcon?: React.ReactElement;

    /**
   * Icon component to display on the right side of the text
   */
    rightIcon?: React.ReactElement;

    /**
   * Additional styles for the button container
   */
    style?: StyleProp<ViewStyle>;

    /**
   * Additional styles for the button text
   */
    textStyle?: StyleProp<TextStyle>;
}

interface VariantStyles {
    backgroundColor: string;
    color: string;
    borderWidth?: number;
    borderColor?: string;
}
  
  type VariantStylesMap = {
    [key in ButtonVariant]: VariantStyles;
};


const CustomButton: React.FC<CustomButtonProps> = ({
    onPress, 
    title, 
    loading = false,
    disabled = false,
    variant = 'primary',
    flex = 1,
    leftIcon,
    rightIcon,
    style,
    textStyle,
    ...props
}) => {

    const {width, height} = useWindowDimensions();

    const calculateFontSize = (): number => {
        const baseSize = Math.min(width, height) * 0.045;
        return Math.min(Math.max(baseSize, 14), 24);
    };

    const calculatePadding = (): { paddingVertical: number; paddingHorizontal: number} => {
        const basePadding = Math.min(width, height) * 0.02;
        return {
            paddingVertical: Math.min(Math.max(basePadding, 8), 20),
            paddingHorizontal: Math.min(Math.max(basePadding * 2, 16), 40),
        };
    };

    const variantStyles: VariantStylesMap = {
        primary: {
            backgroundColor: '#007AFF',
            color: '#FFFFFF',
        },
        secondary: {
            backgroundColor: '#E9ECEF',
            color: '#343A40',
        },
        outline: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#007AFF',
            color: '#007AFF',
        },
        danger: {
            backgroundColor: '#DC3545',
            color: '#FFFFFF',
        }
    };

    const buttonStyles = [
        styles.button,
        calculatePadding(),
        {flex},
        variantStyles[variant],
        disabled && styles.disabled,
        style,
    ];

    const textColors: Record<ButtonVariant, string> = {
        primary: '#FFFFFF',
        secondary: '#343A40',
        outline: '#007AFF',
        danger: '#FFFFFF',
    };

    const textStyles = [
        styles.text,
        { 
          fontSize: calculateFontSize(),
          color: textColors[variant]
        },
        textStyle,
    ];

    const iconSize = calculateFontSize() * 1.2;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            style={buttonStyles}
            activeOpacity={0.7}
            {...props}
        >
            <View style={styles.contentContainer}>
                {leftIcon && !loading && (
                    <View style={styles.iconLeft}>
                        {
                            React.cloneElement(leftIcon, {
                                size: iconSize,
                                color: textColors[variant]
                            })
                        }
                    </View>
                )}
                {
                    loading ? (
                        <ActivityIndicator 
                            color={variant === 'outline' ? '#007AFF' : '#FFFFFF'}
                            size={iconSize}
                        />
                    ) : (
                        <Text style={textStyles} numberOfLines={1} adjustsFontSizeToFit>
                            {title}
                        </Text>
                    )
                }
                {
                    rightIcon && !loading && (
                        <View style={styles.iconRight}>
                            {React.cloneElement(rightIcon, {
                                size: iconSize,
                                color: textColors[variant]
                            })}
                        </View>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    button: {
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    text: {
      fontWeight: '600',
      textAlign: 'center',
    },
    disabled: {
      opacity: 0.5,
    },
    iconLeft: {
      marginRight: 8,
    },
    iconRight: {
      marginLeft: 8,
    },
  });
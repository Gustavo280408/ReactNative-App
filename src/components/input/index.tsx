import React, { ForwardedRef, forwardRef, Fragment } from "react";
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { style } from "./style";
// import { MaterialIcons } from '@expo/vector-icons'; -- Vou Tirar esse dps!
import { themas } from "../../global/themes";
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent, // Icones Nativos
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void, // Ação do icone
    onIconRightPress?: () => void
}

export const Input = forwardRef<TextInput, Props>((Props, ref: ForwardedRef<TextInput> | null) => {
    const { IconLeft, IconRight, IconLeftName, IconRightName, title, onIconLeftPress, onIconRightPress,
        ...rest
    } = Props
    const calculateSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '80%'
        } else if (IconLeft || IconRight) {
            return '90%'
        } else {
            return '100%'
        }
    }

        const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 0;
        } else if (IconLeft || IconRight) {
            return 10;
        } else {
            return 20;
        }
    }

    return (
        <Fragment>
            <Text style={style.titleInput}>{title}</Text>
            <View style={[style.boxInput, { paddingLeft: calculateSizePaddingLeft()}]}>
                {IconLeft && IconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={IconLeftName as any} size={20} color={themas.colors.gray}
                            style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={[
                        style.input, { width: calculateSizeWidth() }
                    ]}
                    {...rest}
                />
                {IconRight && IconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
                        <IconRight name={IconRightName as any} size={20} color={themas.colors.gray}
                            style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>
    )
})
import { Entypo } from '@expo/vector-icons'
import { Heading, HStack, Icon, Image, Text, VStack } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {}

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: 'https://blog.lionfitness.com.br/wp-content/uploads/2018/10/Equipamento-remada-baixa.jpg',
          }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Remada Unilateral
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  )
}

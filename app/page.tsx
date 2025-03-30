"use client"

import { Button, HStack } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"

export default function Home() {
	const { toggleColorMode } = useColorMode()

	return (
		<HStack>
			<Button onClick={toggleColorMode}>Toggle Color Mode</Button>
		</HStack>
	);
}

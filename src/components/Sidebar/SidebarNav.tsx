import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav(){
    return(
        <Stack spacing='12' align='flex-start'>
                <NavSection title='Geral'>

                    <NavLink icon={RiDashboardLine} href='/dashboard'>Dashborad</NavLink>
                    <NavLink icon={RiContactsLine} href='/Users'>Usuários</NavLink>

                </NavSection>
                <NavSection title='Automação'>

                    <NavLink icon={RiInputMethodLine} href='Forms'>Formulários</NavLink>
                    <NavLink icon={RiGitMergeLine} href='/Automation'>Automação</NavLink>

                </NavSection>
            </Stack>
    )
}
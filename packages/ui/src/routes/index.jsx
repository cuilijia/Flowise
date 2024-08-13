import { useRoutes } from 'react-router-dom'
import MainRoutes from './MainRoutes'
import CanvasRoutes from './CanvasRoutes'
import ChatbotRoutes from './ChatbotRoutes'

export default function ThemeRoutes() {
    // 不在 useRoutes 中传入 basename
    return useRoutes([MainRoutes, CanvasRoutes, ChatbotRoutes])
}

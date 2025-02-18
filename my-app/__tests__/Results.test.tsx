import { render, screen } from '@testing-library/react'
import Results from '@/components/search/Results'
import { Result } from '@/lib/types'

describe('Results component', () => {
    const mockResults: Result[] = [
        {
            id: 1,
            login: 'user1',
            avatar_url: 'https://avatar1.com',
            html_url: 'https://github.com/user1',
            followers_url: 'https://github.com/user1/followers',
            following_url: 'https://github.com/user1/following',
            repos_url: 'https://github.com/user1/repos',
            score: 1,
            type: 'user',
            url: 'https://github.com/user1',
            user_view_type: 'user',

        },
        {
            id: 2,
            login: 'user2',
            avatar_url: 'https://avatar2.com',
            html_url: 'https://github.com/user2',
            followers_url: 'https://github.com/user2/followers',
            following_url: 'https://github.com/user2/following',
            repos_url: 'https://github.com/user2/repos',
            score: 1,
            type: 'user',
            url: 'https://github.com/user2',
            user_view_type: 'user',
        }
    ]

    it('renders a list of search results', () => {
        render(<Results results={mockResults} />)

        // Should show usernames
        expect(screen.getByText('user1')).toBeInTheDocument()
        expect(screen.getByText('user2')).toBeInTheDocument()

        // Should render correct number of list items
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(2)
    })

    it('limits results to 6 items', () => {
        const manyResults = Array(10).fill(null).map((_, i) => ({
            id: i,
            login: `user${i}`,
            avatar_url: `https://avatar${i}.com`,
            html_url: `https://github.com/user${i}`
        }))

        render(<Results results={manyResults as Result[]} />)

        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(6)
    })
})

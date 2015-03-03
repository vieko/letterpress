Feature: Authorable Landing Page

	As an author
	I want to curate a landing page
	So that I can entice people to purchase my book

		Scenario: Visitors ca see a book heading
			Given the setting with key "public.book.title" and value "Arbitrary Title" has been set
			And I am a new visitor
			When I navigate to the landing page
			Then I see the heading "Arbitrary Title"

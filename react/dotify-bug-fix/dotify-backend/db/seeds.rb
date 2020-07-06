for i in 1..10
    Song.create(
        title: Faker::Music::Prince.song,
        artist: "Prince"
    )
    puts "Created #{i} songs"
end

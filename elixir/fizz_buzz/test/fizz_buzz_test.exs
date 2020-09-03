defmodule FizzBuzzTest do
  use ExUnit.Case

  describe "build/1" do
    test "should return a converted list, when a valid file is provided" do
      expected_result =
        {:ok, [1, 2, :fiz, 4, :buzz, :fiz, 7, 8, :fiz, :buzz, 11, :fiz, 13, 14, :fizzbuzz]}

      assert FizzBuzz.build("numbers_list.txt") == expected_result
    end

    test "should return an error, when an invalid file is provided" do
      expected_result = {:error, "Error reading the file: enoent"}

      assert FizzBuzz.build("invalid.txt") == expected_result
    end
  end
end

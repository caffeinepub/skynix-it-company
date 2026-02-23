import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      phoneNumber,
      companyName,
      message,
    }: {
      name: string;
      email: string;
      phoneNumber: string | null;
      companyName: string | null;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      const id = await actor.submitContact(
        name,
        email,
        phoneNumber,
        companyName,
        message
      );
      return id;
    },
    onSuccess: () => {
      // Invalidate submissions cache if we add admin view later
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
    },
  });
}

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
